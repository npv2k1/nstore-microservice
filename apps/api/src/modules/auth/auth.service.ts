import { User } from '@modules/user/entities/user.entity';
import { UsersService } from '@modules/user/users.service';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { SecurityConfig } from 'src/common/configs/config.interface';
import { Prisma, PrismaService, UserRole } from 'src/common/prisma/prisma';
import { generateRandomPassword } from 'src/utils/tool';
import { MailService } from '../mail/mail.service';
import { LoginInput } from './dtos/inputs/login.input';
import { ChangePasswordInput } from './dtos/inputs/reset-password.input';
import { Token } from './entities/token.entity';
import { PasswordService } from './password.service';
import { CustomerService } from '../customer/customer.service';

export type UserPayload = {
  userId: number;
  role: string[];
};

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
    private readonly mailService: MailService,
    private readonly customerService: CustomerService
  ) {}

  /**
   * This function creates a new user with a hashed password and a user role, and generates tokens for
   * the user.
   * @param payload - The payload parameter is an object of type Prisma.UserCreateInput, which contains
   * the data needed to create a new user in the database. It includes properties such as email,
   * password, firstName, lastName, and any other relevant user information.
   * @returns a Promise that resolves to an object containing tokens generated for the newly created
   * user.
   */
  async createUser(payload: Prisma.UserCreateInput) {
    const hashedPassword = await this.passwordService.hashPassword(payload.password);

    try {
      return await this.prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            ...payload,
            password: hashedPassword,
          },
        });

        const userRole = await tx.userRole.create({
          data: {
            userId: user.id,
            roleName: 'user',
          },
        });

        return this.generateTokens({
          userId: user.id,
          role: [userRole.roleName],
        });
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new ConflictException(`Email ${payload.email} already used.`);
      } else {
        throw new Error(e);
      }
    }
  }

  async googleAuth(googleUser) {
    const user = await this.prisma.user.findUnique({
      where: { email: googleUser.email },
      select: {
        id: true,
        email: true,
        password: true,
        picture: true,
        fullName: true,
        UserRole: {
          select: {
            roleName: true,
          },
        },
      },
    });

    if (user === null) {
      // create user
      const newUser = await this.createUser({
        email: googleUser.email,
        password: generateRandomPassword(10),
        fullName: googleUser.name,
        picture: googleUser.picture,
        Provider: {
          create: {
            AuthProvider: {
              connectOrCreate: {
                where: {
                  providerId: googleUser.providerId,
                },
                create: {
                  name: googleUser.provider,
                  providerId: googleUser.providerId,
                },
              },
            },
          },
        },
      });

      return newUser;
    } else {
      const userRole: string[] = user.UserRole.map((role) => role.roleName);
      const payload: UserPayload = {
        userId: user.id,
        role: userRole,
      };
      // update user if needed
      if (user.picture !== googleUser.picture || user.fullName !== googleUser.name) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: {
            fullName: googleUser.name,
            picture: googleUser.picture,
          },
        });
      }

      return this.generateTokens(payload);
    }
    // map role to string
  }

  async validateAccessToken(authToken: string) {
    if (!authToken) return;
    const dt = this.jwtService.decode(authToken);
    if (!dt['id']) return;
    const user = await this.prisma.user.findUnique({
      where: { id: dt['id'] },
    });
    return user;
  }

  async login(loginInput: LoginInput): Promise<Token> {
    const { email, password } = loginInput;

    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        password: true,
        UserRole: {
          select: {
            roleName: true,
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException(`Email or password is incorrect`);
    }
    // map role to string

    const passwordValid = await this.passwordService.validatePassword(password, user.password);

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }
    const userRole: string[] = user.UserRole.map((role) => role.roleName);
    const payload: UserPayload = {
      userId: user.id,
      role: userRole,
    };
    return this.generateTokens(payload);
  }

  getUserRoles(
    user: User & {
      UserRole: UserRole[];
    }
  ): string[] {
    return user.UserRole.map((role) => role.roleName);
  }

  async validateUser(userId: number): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        UserRole: {
          select: {
            roleName: true,
          },
        },
      },
    });

    const roles = user.UserRole.map((role) => role.roleName);
    const _user = {
      ...user,
      roles: roles,
    };
    const customer = await this.customerService.createOrUpdate({ uid: user.id }, _user);

    return {
      ...user,
      _id: customer._id,
    };
  }

  generateTokens(payload: UserPayload): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: UserPayload): string {
    let p = {
      ...payload,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': payload.role,
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': String(payload.userId),
        'x-hasura-role': 'user',
      },
    };
    return this.jwtService.sign(p);
  }

  private generateRefreshToken(payload: { userId: number }): string {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: securityConfig.refreshIn,
    });
  }

  /* A method to refresh the token. */
  async refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });

      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: {
          UserRole: true,
        },
      });

      return this.generateTokens({
        userId: user.id,
        role: this.getUserRoles(user),
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async resetPassword(args: { token: string; password: string }) {
    // validate token
    const { token, password } = args;
    const { id } = this.jwtService.verify(token, {
      secret: this.configService.get('JWT_RESET_SECRET'),
    });

    // update password
    const hashedPassword = await this.passwordService.hashPassword(password);
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        password: hashedPassword,
      },
    });

    return user;
  }
  async forgotPassword(email: string) {
    // find user
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    // generate token

    const token = this.jwtService.sign(
      {
        id: user.id,
      },
      {
        secret: this.configService.get('JWT_RESET_SECRET'),
        expiresIn: '1h',
      }
    );

    // send email
    const url = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    // TODO: send email
    this.mailService.send({
      to: email,
      subject: 'Reset Password',
      html: `
        <h3>Reset Password</h3>
        <p>Click <a href="${url}">here</a> to reset your password</p>
      `,
    });
  }

  async changePassword(input: ChangePasswordInput, user: User) {
    const { oldPassword, newPassword } = input;

    // find user and password

    let oldUser = await this.prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        password: true,
      },
    });

    const passwordValid = await this.passwordService.validatePassword(oldPassword, oldUser.password);

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const hashedPassword = await this.passwordService.hashPassword(newPassword);
    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
      },
    });

    // TODO: send email

    return 'Password changed successfully';
  }
}

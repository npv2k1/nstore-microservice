import {
  Injectable
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { PasswordService } from './password.service';

export type UserPayload = {
  userId: number;
  role: string[];
};

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
    private readonly userServices: UserService
  ) {}

  async validateAccessToken(authToken: string) {
    if (!authToken) return;
    const dt = this.jwtService.decode(authToken);
    console.log('authToken', authToken);
    if (!dt['id']) return;
    // const user = await this.prisma.user.findUnique({
    //   where: { id: dt['id'] },
    // });
    // console.log('user', user);
    return {};

    // throw new Error('Method not implemented.');
  }

  async validateUser(userId: number): Promise<User> {
    // Fetch user from user service
    const user = await (
      await axios.get(`${process.env.AUTH_SERVICE}/api/user/` + userId)
    ).data;

    const _user = await this.userServices.createOrUpdate(
      { uid: user.id },
      user
    );
    // console.log(
    //   '🚀 ~ file: auth.service.ts:55 ~ AuthService ~ validateUser ~ _user:',
    //   _user
    // );

    return _user;
  }
}

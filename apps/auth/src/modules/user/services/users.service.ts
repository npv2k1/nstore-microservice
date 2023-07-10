import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from 'src/common/prisma/prisma';
import { PasswordService } from 'src/modules/auth/password.service';
import { FindManyUserArgs, FindOneUserArgs } from '../dtos/args/find-user.args';
import { InsertManyUserArgs, InsertOneUserArgs } from '../dtos/args/insert-user.args';

@Injectable()
export class UsersService {
  constructor(protected prisma: PrismaService, protected passwordService: PasswordService) {}

  async findMany(args: FindManyUserArgs) {
    const Products = await this.prisma.user.findMany(args);
    return Products;
  }

  async findOne(args: FindOneUserArgs) {
    return await this.prisma.user.findUnique(args);
  }

  async insertOne(args: InsertOneUserArgs) {
    return await this.prisma.user.create(args);
  }

  async insertMany(args: InsertManyUserArgs) {
    return await this.prisma.user.createMany(args);
  }

  async createUser(args: Prisma.UserCreateArgs, roles?: string[]) {
    const hashedPassword = await this.passwordService.hashPassword(args.data.password);
    args.data.password = hashedPassword;
    const user = await this.prisma.user.create({
      data: {
        ...args.data,
      },
    });
    await this.updateOrCreateRoles(user.id, roles);
    return this.findOne({ where: { id: user.id } });
  }

  async updateUser(args: Prisma.UserUpdateArgs, roles?: string[]) {
    if (args.data.password) {
      const hashedPassword = await this.passwordService.hashPassword(args.data.password as string);
      args.data.password = hashedPassword;
    } else {
      delete args.data.password;
    }
    if (roles) {
      await this.updateOrCreateRoles(args.where.id, roles);
    }
    return this.prisma.user.update({
      data: {
        ...args.data,
      },
      where: args.where,
    });
  }

  async updateOrCreateRoles(userId: number, roles: string[]) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        UserRole: true,
      },
    });

    const newRoles = roles.filter((role) => {
      return !user.UserRole.find((userRole) => userRole.roleName === role);
    });

    // create new roles
    await this.prisma.userRole.createMany({
      data: newRoles.map((role) => ({
        roleName: role,
        userId: userId,
      })),
    });

    if (!user.UserRole) {
      const deleteRoles = user.UserRole.filter((userRole) => {
        return !roles.find((role) => role === userRole.roleName);
      });

      await this.prisma.userRole.deleteMany({
        where: {
          id: {
            in: deleteRoles.map((role) => role.id),
          },
        },
      });
    }
  }

  async deleteUser(args: Prisma.UserDeleteArgs) {
    return this.prisma.user.delete(args);
  }

  async aggregate<T extends Prisma.UserAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserAggregateArgs>
  ): Promise<Prisma.GetUserAggregateType<T>> {
    return this.prisma.user.aggregate(args);
  }

  async getUserRole(id: number) {
    return this.prisma.user
      .findUnique({
        where: {
          id: id,
        },
      })
      .UserRole();
  }
  async findUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        UserRole: true,
      },
    });

    delete user.password;
    return user;
  }
}

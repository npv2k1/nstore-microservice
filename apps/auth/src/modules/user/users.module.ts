import { Module } from '@nestjs/common';
import { PasswordService } from 'src/modules/auth/password.service';
import { UsersController } from './users.controller';
import { UserResolver } from './resolvers/users.resolver';
import { UsersService } from './services/users.service';
import { RoleResolver } from './resolvers/role.resolver';
import { RoleService } from './services/role.service';

@Module({
  imports: [],
  providers: [
    UsersService,
    PasswordService,
    UserResolver,
    RoleResolver,
    RoleService,
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

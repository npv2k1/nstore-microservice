import { Module } from '@nestjs/common';
import { PasswordService } from 'src/modules/auth/password.service';
import { UsersController } from './users.controller';
import { UserResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [],
  providers: [UsersService, PasswordService, UserResolver],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

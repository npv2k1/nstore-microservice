import { User } from '@modules/user/entities/User';
import { Inject, Injectable, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Roles, UserEntity } from 'src/common/decorators';
import { GqlAuthGuard } from 'src/common/guards';
import { AuthService } from './auth.service';
import { LoginInput } from './dtos/inputs/LoginInput';
import { SignupInput } from './dtos/inputs/SignupInput';
import { Token } from './entities/Token';
import {
  ChangePasswordInput,
  ForgotPasswordInput,
  ResetPasswordInput,
} from './dtos/inputs/reset-password.input';

@Resolver(() => User)
export class AuthResolver {
  constructor(protected authService: AuthService) {}

  @Mutation(() => Token)
  async login(@Args('input') input: LoginInput) {
    return this.authService.login(input);
  }

  @Mutation(() => Token)
  async signup(@Args('input') input: SignupInput) {
    return this.authService.createUser(input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User) {
    return user;
  }

  @Mutation(() => String)
  async forgotPassword(@Args('input') { email }: ForgotPasswordInput) {
    await this.authService.forgotPassword(email.toLowerCase());
    return 'Success';
  }

  @Mutation(() => String)
  async resetPassword(@Args('input') { token, password }: ResetPasswordInput) {
    await this.authService.resetPassword({
      token,
      password,
    });
    return 'Success';
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  async changePassword(
    @Args('input') input: ChangePasswordInput,
    @UserEntity() user: User
  ) {
    return this.authService.changePassword(input, user);
  }
}

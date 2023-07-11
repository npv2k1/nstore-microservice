import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from 'src/common/decorators';
import { GqlAuthGuard } from 'src/common/guards';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';

@Resolver(() => User)
export class AuthResolver {
  constructor(protected authService: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User) {
    return user;
  }
}

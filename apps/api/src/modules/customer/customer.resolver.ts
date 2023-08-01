import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from '@/common/decorators';
import { GqlAuthGuard } from '@/common/guards';

import { Customer } from './entities/customer.entity';
import { CustomerService } from './customer.service';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Customer)
  async profile(@UserEntity() user: Customer) {
    console.log('profile', user);
    return user;
  }
}

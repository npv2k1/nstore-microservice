import { Query, Resolver } from '@nestjs/graphql';
import { Customer } from './entities/customer.entity';
import { CustomerService } from './customer.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '@/common/guards';
import { UserEntity } from '@/common/decorators';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Customer)
  async profile(@UserEntity() user: Customer) {
    console.log(user);
    return user;
  }
}

import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';

import { Roles, UserEntity } from '@/common/decorators';
import { ROLES_KEY } from '@/common/decorators/roles.decorator';
import { ROLE } from '@/common/enums/role.enum';
import { GqlAuthGuard } from '@/common/guards';

import { AuthUser } from '../auth/entities/auth-user,entity';
import { Customer } from '../customer/entities/customer.entity';
import { User } from '../user/entities/user.entity';

import { DeleteManyCartArgs, DeleteOneCartArgs } from './dtos/args/delete-cart.args';
import { FindManyCartArgs, FindOneCartArgs } from './dtos/args/find-cart.args';
import { InsertManyCartArgs, InsertOneCartArgs } from './dtos/args/insert-cart.args';
import { UpdateManyCartArgs, UpdateOneCartArgs } from './dtos/args/update-cart.args';
import { UpsertOneCartArgs } from './dtos/args/upsert-cart.args';
import { Cart } from './entities/cart.entity';
import { CartService } from './cart.service';

@Roles(ROLE.USER)
@UseGuards(GqlAuthGuard)
@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Query(() => [Cart], {
    name: `${pluralize.plural(Cart.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyCartArgs, @UserEntity() user: AuthUser) {
    const _args = {
      ...args,
      query: {
        ...args.query,
        customer: user._id,
      },
    };
    return this.cartService.findMany(_args);
  }

  @Query(() => Cart, { name: Cart.name.toLowerCase() })
  async findOne(@Args() args: FindOneCartArgs, @UserEntity() user: AuthUser) {
    args.query.customer = user._id;
    const res = await this.cartService.findOne(args);
    console.log('🚀 ~ file: cart.resolver.ts:43 ~ CartResolver ~ findOne ~ res:', res);
    return res;
  }

  @Mutation(() => Cart, {
    name: `deleteOne${pluralize.singular(Cart.name)}`,
  })
  async deleteOne(@Args() args: DeleteOneCartArgs, @UserEntity() user: AuthUser) {
    args.query.customer = user._id;

    const res = await this.cartService.deleteOne(args);
    console.log('🚀 ~ file: cart.resolver.ts:54 ~ CartResolver ~ deleteOne ~ res:', res);
    return res;
  }

  @Roles(ROLE.USER)
  @Mutation(() => Cart, {
    name: `insertOne${pluralize.singular(Cart.name)}`,
  })
  async insertOne(@Args() args: InsertOneCartArgs, @UserEntity() user: AuthUser) {
    args.data.customer = user._id;

    return await this.cartService.upsertOneAndIncreaseQuantity(args);
  }

  @Mutation(() => Cart, {
    name: `updateOne${pluralize.singular(Cart.name)}`,
  })
  async updateOne(@Args() args: UpdateOneCartArgs, @UserEntity() user: AuthUser) {
    args.query.customer = user._id;
    const res = await this.cartService.updateOne(args);
    return res;
  }

  // @Mutation(() => Cart, {
  //   name: `insertMany${pluralize.plural(Cart.name)}`,
  // })
  // async insertMany(@Args() args: InsertManyCartArgs) {
  //   return await this.cartService.insertMany(args);
  // }

  // @Mutation(() => Cart, {
  //   name: `updateMany${pluralize.plural(Cart.name)}`,
  // })
  // async updateMany(@Args() args: UpdateManyCartArgs) {
  //   return await this.cartService.updateMany(args);
  // }

  // @Mutation(() => Cart, {
  //   name: `deleteMany${pluralize.plural(Cart.name)}`,
  // })
  // async deleteMany(@Args() args: DeleteManyCartArgs) {
  //   return await this.cartService.deleteMany(args);
  // }

  // @Mutation(() => Cart, {
  //   name: `upsertOne${pluralize.singular(Cart.name)}`,
  // })
  // async upsertOne(@Args() args: UpsertOneCartArgs) {
  //   return await this.cartService.upsertOne(args);
  // }
}

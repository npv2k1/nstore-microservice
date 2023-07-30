import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';

import { UserEntity } from '@/common/decorators';
import { GqlAuthGuard } from '@/common/guards';

import { AuthUser } from '../auth/entities/auth-user,entity';

import { DeleteManyOrderArgs, DeleteOneOrderArgs } from './dtos/args/delete-order.args';
import { FindManyOrderArgs, FindOneOrderArgs } from './dtos/args/find-order.args';
import { InsertManyOrderArgs, InsertOneOrderArgs } from './dtos/args/insert-order.args';
import { UpdateManyOrderArgs, UpdateOneOrderArgs } from './dtos/args/update-order.args';
import { UpsertOneOrderArgs } from './dtos/args/upsert-order.args';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}
  @Query(() => [Order], {
    name: `${pluralize.plural(Order.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyOrderArgs) {
    return this.orderService.findMany(args);
  }

  @Query(() => Order, { name: Order.name.toLowerCase() })
  async findOne(@Args() args: FindOneOrderArgs) {
    return this.orderService.findOne(args);
  }

  // @Mutation(() => Order, {
  //   name: `deleteOne${pluralize.singular(Order.name)}`,
  // })
  // async deleteOne(@Args() args: DeleteOneOrderArgs) {
  //   return await this.orderService.deleteOne(args);
  // }

  // @Mutation(() => Order, {
  //   name: `deleteMany${pluralize.plural(Order.name)}`,
  // })
  // async deleteMany(@Args() args: DeleteManyOrderArgs) {
  //   return await this.orderService.deleteMany(args);
  // }

  @Mutation(() => Order, {
    name: `insertOne${pluralize.singular(Order.name)}`,
  })
  async insertOne(@Args() args: InsertOneOrderArgs, @UserEntity() user: AuthUser) {
    args.data.customer = user._id;
    return await this.orderService.insertOne(args);
  }

  // @Mutation(() => Order, {
  //   name: `insertMany${pluralize.plural(Order.name)}`,
  // })
  // async insertMany(@Args() args: InsertManyOrderArgs) {
  //   return await this.orderService.insertMany(args);
  // }

  // @Mutation(() => Order, {
  //   name: `updateOne${pluralize.singular(Order.name)}`,
  // })
  // async updateOne(@Args() args: UpdateOneOrderArgs) {
  //   return await this.orderService.updateOne(args);
  // }

  // @Mutation(() => Order, {
  //   name: `updateMany${pluralize.plural(Order.name)}`,
  // })
  // async updateMany(@Args() args: UpdateManyOrderArgs) {
  //   return await this.orderService.updateMany(args);
  // }

  // @Mutation(() => Order, {
  //   name: `upsertOne${pluralize.singular(Order.name)}`,
  // })
  // async upsertOne(@Args() args: UpsertOneOrderArgs) {
  //   return await this.orderService.upsertOne(args);
  // }
}

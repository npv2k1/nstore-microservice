import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';
import {
  DeleteOnePaymentArgs,
  DeleteManyPaymentArgs,
} from './dtos/args/delete-payment.args';
import {
  FindManyPaymentArgs,
  FindOnePaymentArgs,
} from './dtos/args/find-payment.args';
import {
  InsertOnePaymentArgs,
  InsertManyPaymentArgs,
} from './dtos/args/insert-payment.args';
import {
  UpdateOnePaymentArgs,
  UpdateManyPaymentArgs,
} from './dtos/args/update-payment.args';
import { UpsertOnePaymentArgs } from './dtos/args/upsert-payment.args';
import { Payment } from './entities/payment.entity';
import { PaymentService } from './payment.service';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}
  @Query(() => [Payment], {
    name: `${pluralize.plural(Payment.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyPaymentArgs) {
    return this.paymentService.findMany(args);
  }

  @Query(() => Payment, { name: Payment.name.toLowerCase() })
  async findOne(@Args() args: FindOnePaymentArgs) {
    return this.paymentService.findOne(args);
  }

  @Mutation(() => Payment, {
    name: `deleteOne${pluralize.singular(Payment.name)}`,
  })
  async deleteOne(@Args() args: DeleteOnePaymentArgs) {
    return await this.paymentService.deleteOne(args);
  }

  @Mutation(() => Payment, {
    name: `deleteMany${pluralize.plural(Payment.name)}`,
  })
  async deleteMany(@Args() args: DeleteManyPaymentArgs) {
    return await this.paymentService.deleteMany(args);
  }

  @Mutation(() => Payment, {
    name: `insertOne${pluralize.singular(Payment.name)}`,
  })
  async insertOne(@Args() args: InsertOnePaymentArgs) {
    return await this.paymentService.insertOne(args);
  }

  @Mutation(() => Payment, {
    name: `insertMany${pluralize.plural(Payment.name)}`,
  })
  async insertMany(@Args() args: InsertManyPaymentArgs) {
    return await this.paymentService.insertMany(args);
  }

  @Mutation(() => Payment, {
    name: `updateOne${pluralize.singular(Payment.name)}`,
  })
  async updateOne(@Args() args: UpdateOnePaymentArgs) {
    return await this.paymentService.updateOne(args);
  }

  @Mutation(() => Payment, {
    name: `updateMany${pluralize.plural(Payment.name)}`,
  })
  async updateMany(@Args() args: UpdateManyPaymentArgs) {
    return await this.paymentService.updateMany(args);
  }

  @Mutation(() => Payment, {
    name: `upsertOne${pluralize.singular(Payment.name)}`,
  })
  async upsertOne(@Args() args: UpsertOnePaymentArgs) {
    return await this.paymentService.upsertOne(args);
  }
}

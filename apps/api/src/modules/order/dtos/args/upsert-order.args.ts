import { ArgsType, Field } from '@nestjs/graphql';
import { OrderInsertInput } from '../inputs/order-insert.input';
import { OrderQueryInput } from '../inputs/order-query.input';

@ArgsType()
export class UpsertOneOrderArgs {
  @Field(() => OrderQueryInput, { nullable: true })
  query?: OrderQueryInput;

  @Field(() => OrderInsertInput, { nullable: false })
  data: OrderInsertInput;
}

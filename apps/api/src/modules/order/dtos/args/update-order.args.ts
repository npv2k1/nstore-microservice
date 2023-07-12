import { ArgsType, Field } from '@nestjs/graphql';
import { OrderQueryInput } from '../inputs/order-query.input';
import { OrderUpdateInput } from '../inputs/order-update.input';

@ArgsType()
export class UpdateManyOrderArgs {
  @Field(() => OrderQueryInput, { nullable: true })
  query?: OrderQueryInput;

  @Field(() => OrderUpdateInput, { nullable: false })
  data!: OrderUpdateInput;
}

@ArgsType()
export class UpdateOneOrderArgs {
  @Field(() => OrderQueryInput, { nullable: false })
  query!: OrderQueryInput;

  @Field(() => OrderUpdateInput, { nullable: false })
  data!: OrderUpdateInput;
}

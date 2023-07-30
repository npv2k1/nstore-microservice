import { ArgsType, Field } from '@nestjs/graphql';

import { OrderQueryInput } from '../inputs/order-query.input';

@ArgsType()
export class DeleteManyOrderArgs {
  @Field(() => OrderQueryInput, { nullable: true })
  query?: OrderQueryInput;
}
@ArgsType()
export class DeleteOneOrderArgs {
  @Field(() => OrderQueryInput, { nullable: false })
  query!: OrderQueryInput;
}

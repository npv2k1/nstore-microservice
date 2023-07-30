import { ArgsType, Field } from '@nestjs/graphql';

import { OrderQueryInput } from '../inputs/order-query.input';

@ArgsType()
export class FindManyOrderArgs {
  @Field(() => OrderQueryInput, { nullable: true })
  query?: OrderQueryInput;
}

@ArgsType()
export class FindOneOrderArgs {
  @Field(() => OrderQueryInput, { nullable: false })
  query!: OrderQueryInput;
}

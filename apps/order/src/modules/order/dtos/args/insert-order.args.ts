import { ArgsType, Field } from '@nestjs/graphql';
import { OrderInsertInput } from '../inputs/order-insert.input';

@ArgsType()
export class InsertManyOrderArgs {
  @Field(() => [OrderInsertInput], { nullable: false })
  data!: OrderInsertInput[];
}

@ArgsType()
export class InsertOneOrderArgs {
  @Field(() => OrderInsertInput, { nullable: false })
  data!: OrderInsertInput;
}

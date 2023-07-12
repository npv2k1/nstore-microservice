import { ArgsType, Field } from '@nestjs/graphql';
import { CartInsertInput } from '../inputs/cart-insert.input';
import { CartQueryInput } from '../inputs/cart-query.input';

@ArgsType()
export class UpsertOneCartArgs {
  @Field(() => CartQueryInput, { nullable: true })
  query?: CartQueryInput;

  @Field(() => CartInsertInput, { nullable: false })
  data: CartInsertInput;
}

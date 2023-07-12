import { ArgsType, Field } from '@nestjs/graphql';
import { CartInsertInput } from '../inputs/cart-insert.input';

@ArgsType()
export class InsertManyCartArgs {
  @Field(() => [CartInsertInput], { nullable: false })
  data!: CartInsertInput[];
}

@ArgsType()
export class InsertOneCartArgs {
  @Field(() => CartInsertInput, { nullable: false })
  data!: CartInsertInput;
}

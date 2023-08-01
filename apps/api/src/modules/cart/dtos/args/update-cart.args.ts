import { ArgsType, Field } from '@nestjs/graphql';

import { CartQueryInput } from '../inputs/cart-query.input';
import { CartUpdateInput } from '../inputs/cart-update.input';

@ArgsType()
export class UpdateManyCartArgs {
  @Field(() => CartQueryInput, { nullable: true })
  query?: CartQueryInput;

  @Field(() => CartUpdateInput, { nullable: false })
  data!: CartUpdateInput;
}

@ArgsType()
export class UpdateOneCartArgs {
  @Field(() => CartQueryInput, { nullable: false })
  query!: CartQueryInput;

  @Field(() => CartUpdateInput, { nullable: false })
  data!: CartUpdateInput;
}

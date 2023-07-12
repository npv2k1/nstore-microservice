import { ArgsType, Field } from '@nestjs/graphql';
import { CartQueryInput } from '../inputs/cart-query.input';

@ArgsType()
export class FindManyCartArgs {
  @Field(() => CartQueryInput, { nullable: true })
  query?: CartQueryInput;
}

@ArgsType()
export class FindOneCartArgs {
  @Field(() => CartQueryInput, { nullable: false })
  query!: CartQueryInput;
}

import { ArgsType, Field } from '@nestjs/graphql';
import { CartQueryInput } from '../inputs/cart-query.input';

@ArgsType()
export class DeleteManyCartArgs {
  @Field(() => CartQueryInput, { nullable: true })
  query?: CartQueryInput;
}
@ArgsType()
export class DeleteOneCartArgs {
  @Field(() => CartQueryInput, { nullable: false })
  query!: CartQueryInput;
}

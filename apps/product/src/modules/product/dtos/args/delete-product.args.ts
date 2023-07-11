import { ArgsType, Field } from '@nestjs/graphql';
import { ProductQueryInput } from '../inputs/product-query.input';

@ArgsType()
export class DeleteManyProductArgs {
  @Field(() => ProductQueryInput, { nullable: true })
  query?: ProductQueryInput;
}
@ArgsType()
export class DeleteOneProductArgs {
  @Field(() => ProductQueryInput, { nullable: false })
  query!: ProductQueryInput;
}

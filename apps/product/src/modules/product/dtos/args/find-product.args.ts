import { ArgsType, Field } from '@nestjs/graphql';
import { ProductQueryInput } from '../inputs/product-query.input';

@ArgsType()
export class FindManyProductArgs {
  @Field(() => ProductQueryInput, { nullable: true })
  query?: ProductQueryInput;
}

@ArgsType()
export class FindOneProductArgs {
  @Field(() => ProductQueryInput, { nullable: false })
  query!: ProductQueryInput;
}

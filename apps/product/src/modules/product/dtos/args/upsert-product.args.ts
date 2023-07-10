import { ArgsType, Field } from '@nestjs/graphql';
import { ProductInsertInput } from '../inputs/product-insert.input';
import { ProductQueryInput } from '../inputs/product-query.input';

@ArgsType()
export class UpsertOneProductArgs {
  @Field(() => ProductQueryInput, { nullable: true })
  query?: ProductQueryInput;

  @Field(() => ProductInsertInput, { nullable: false })
  data: ProductInsertInput;
}

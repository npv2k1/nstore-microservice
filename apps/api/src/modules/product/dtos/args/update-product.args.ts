import { ArgsType, Field } from '@nestjs/graphql';

import { ProductQueryInput } from '../inputs/product-query.input';
import { ProductUpdateInput } from '../inputs/product-update.input';

@ArgsType()
export class UpdateManyProductArgs {
  @Field(() => ProductQueryInput, { nullable: true })
  query?: ProductQueryInput;

  @Field(() => ProductUpdateInput, { nullable: false })
  data!: ProductUpdateInput;
}

@ArgsType()
export class UpdateOneProductArgs {
  @Field(() => ProductQueryInput, { nullable: false })
  query!: ProductQueryInput;

  @Field(() => ProductUpdateInput, { nullable: false })
  data!: ProductUpdateInput;
}

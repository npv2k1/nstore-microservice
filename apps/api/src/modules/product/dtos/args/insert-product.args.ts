import { ArgsType, Field } from '@nestjs/graphql';

import { ProductInsertInput } from '../inputs/product-insert.input';

@ArgsType()
export class InsertManyProductArgs {
  @Field(() => [ProductInsertInput], { nullable: false })
  data!: ProductInsertInput[];
}

@ArgsType()
export class InsertOneProductArgs {
  @Field(() => ProductInsertInput, { nullable: false })
  data!: ProductInsertInput;
}

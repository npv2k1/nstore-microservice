import { ArgsType, Field } from '@nestjs/graphql';

import { PaginateOptionsInput } from '@/modules/common/dtos/inputs/input';

import { ProductQueryInput } from '../inputs/product-query.input';

@ArgsType()
export class FindManyProductArgs {
  @Field(() => ProductQueryInput, { nullable: true })
  query?: ProductQueryInput;

  @Field(() => PaginateOptionsInput, { nullable: true })
  paginate: PaginateOptionsInput;
}

@ArgsType()
export class FindOneProductArgs {
  @Field(() => ProductQueryInput, { nullable: false })
  query!: ProductQueryInput;
}

import { ArgsType, Field } from '@nestjs/graphql';

import { PaginateOptionsInput } from '@/modules/common/dtos/inputs/input';

import { CategoryQueryInput } from '../inputs/category-query.input';

@ArgsType()
export class FindManyCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: true })
  query?: CategoryQueryInput;
  @Field(() => PaginateOptionsInput, { nullable: true })
  paginate?: PaginateOptionsInput;
}

@ArgsType()
export class FindOneCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: false })
  query!: CategoryQueryInput;
}

import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryQueryInput } from '../inputs/category-query.input';
import { PaginateOptionsInput } from '@/modules/common/dtos/inputs/input';

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

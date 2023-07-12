import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryQueryInput } from '../inputs/category-query.input';

@ArgsType()
export class FindManyCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: true })
  query?: CategoryQueryInput;
}

@ArgsType()
export class FindOneCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: false })
  query!: CategoryQueryInput;
}

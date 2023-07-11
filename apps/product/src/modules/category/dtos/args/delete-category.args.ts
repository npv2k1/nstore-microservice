import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryQueryInput } from '../inputs/category-query.input';

@ArgsType()
export class DeleteManyCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: true })
  query?: CategoryQueryInput;
}
@ArgsType()
export class DeleteOneCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: false })
  query!: CategoryQueryInput;
}

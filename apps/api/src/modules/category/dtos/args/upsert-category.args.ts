import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryInsertInput } from '../inputs/category-insert.input';
import { CategoryQueryInput } from '../inputs/category-query.input';

@ArgsType()
export class UpsertOneCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: true })
  query?: CategoryQueryInput;

  @Field(() => CategoryInsertInput, { nullable: false })
  data: CategoryInsertInput;
}

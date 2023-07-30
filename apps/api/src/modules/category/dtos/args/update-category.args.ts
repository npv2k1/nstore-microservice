import { ArgsType, Field } from '@nestjs/graphql';

import { CategoryQueryInput } from '../inputs/category-query.input';
import { CategoryUpdateInput } from '../inputs/category-update.input';

@ArgsType()
export class UpdateManyCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: true })
  query?: CategoryQueryInput;

  @Field(() => CategoryUpdateInput, { nullable: false })
  data!: CategoryUpdateInput;
}

@ArgsType()
export class UpdateOneCategoryArgs {
  @Field(() => CategoryQueryInput, { nullable: false })
  query!: CategoryQueryInput;

  @Field(() => CategoryUpdateInput, { nullable: false })
  data!: CategoryUpdateInput;
}

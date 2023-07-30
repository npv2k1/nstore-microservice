import { ArgsType, Field } from '@nestjs/graphql';

import { CategoryInsertInput } from '../inputs/category-insert.input';

@ArgsType()
export class InsertManyCategoryArgs {
  @Field(() => [CategoryInsertInput], { nullable: false })
  data!: CategoryInsertInput[];
}

@ArgsType()
export class InsertOneCategoryArgs {
  @Field(() => CategoryInsertInput, { nullable: false })
  data!: CategoryInsertInput;
}

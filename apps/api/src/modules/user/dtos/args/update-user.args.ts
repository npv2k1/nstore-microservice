import { ArgsType, Field } from '@nestjs/graphql';

import { UserQueryUniqueInput } from '../inputs/user-query.input';
import { UpdateUserInput } from '../inputs/user-update.input';

@ArgsType()
export class UpdateOneUserArgs {
  @Field()
  data: UpdateUserInput;
  @Field()
  where: UserQueryUniqueInput;
}

@ArgsType()
export class UpdateManyUserArgs {
  @Field()
  data: UpdateUserInput;
  @Field()
  where: UserQueryUniqueInput;
}

import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UserQueryInput, UserQueryUniqueInput } from '../inputs/user-query.input';

@ArgsType()
export class DeleteOneUserArgs {
  @Field(() => UserQueryUniqueInput, { nullable: false })
  where: UserQueryUniqueInput;
}

@ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserQueryInput, { nullable: false })
  where: UserQueryInput;
}

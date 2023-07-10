import { Field, Int, ArgsType } from '@nestjs/graphql';
import { UserQueryUniqueInput, UserQueryInput } from '../inputs/user-query.input';

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

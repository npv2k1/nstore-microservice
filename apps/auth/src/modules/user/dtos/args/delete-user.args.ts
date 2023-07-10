import { Field, Int, ArgsType } from '@nestjs/graphql';
import { UserQueryInput } from '../inputs/user-query.input';

@ArgsType()
export class DeleteOneUserArgs {
  @Field(() => UserQueryInput, { nullable: false })
  where: UserQueryInput;
}

@ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserQueryInput, { nullable: false })
  where: UserQueryInput;
}

import { ArgsType, Field } from '@nestjs/graphql';
import { CreateBaseArgs } from '@modules/common/dtos/args/CreateBaseArgs';

import { UserInsertInput } from '../inputs/user-insert.input';

@ArgsType()
export class InsertOneUserArgs {
  @Field(() => UserInsertInput, { nullable: false })
  data!: UserInsertInput;
}

@ArgsType()
export class InsertManyUserArgs {
  @Field(() => [UserInsertInput], { nullable: false })
  data!: UserInsertInput[];
}

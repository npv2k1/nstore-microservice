import { Field, Int, ArgsType } from '@nestjs/graphql';

@ArgsType()
class DeleteUserArgs {
  @Field(() => Int, { nullable: false })
  id: number;
}
export { DeleteUserArgs };

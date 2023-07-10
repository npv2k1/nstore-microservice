import { ArgsType, Field } from '@nestjs/graphql';
import { UpdateUserInput } from '../inputs/user-update.input';
import { WhereUniqueUserInput } from '../inputs/UserWhereInput';

@ArgsType()
export class UpdateUserArgs {
  @Field()
  data: UpdateUserInput;
  @Field()
  where: WhereUniqueUserInput;
}

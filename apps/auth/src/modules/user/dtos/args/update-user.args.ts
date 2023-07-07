import { ArgsType, Field } from '@nestjs/graphql';
import { CreateUserInput } from '../inputs/create-user.input';
import { UpdateUserInput } from '../inputs/update-user.input';
import { WhereUniqueUserInput } from '../inputs/UserWhereInput';

@ArgsType()
export class UpdateUserArgs {
  @Field()
  data: UpdateUserInput;
  @Field()
  where: WhereUniqueUserInput;
}

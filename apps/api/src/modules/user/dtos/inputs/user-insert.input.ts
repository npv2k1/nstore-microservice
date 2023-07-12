import { Field, InputType, Int } from '@nestjs/graphql';
import { UserInput } from './user.input';

@InputType()
class UserInsertInput extends UserInput {}

export { UserInsertInput };

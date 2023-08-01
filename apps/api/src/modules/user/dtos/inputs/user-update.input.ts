import { InputType, PartialType } from '@nestjs/graphql';

import { UserInsertInput } from './user-insert.input';

@InputType()
export class UpdateUserInput extends PartialType(UserInsertInput) {}

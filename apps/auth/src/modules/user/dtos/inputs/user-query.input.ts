import { InputType, PartialType, PickType } from '@nestjs/graphql';
import { UserInput } from './user.input';

@InputType()
export class UserQueryInput extends PartialType(UserInput) {}

@InputType()
export class UserQueryUniqueInput extends PickType(UserInput, ['id'] as const) {}

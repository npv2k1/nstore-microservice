import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { CreateStorageInput } from './create-storage.input';

@InputType()
export class UpdateStorageInput extends PartialType(CreateStorageInput) {
  @Field(() => Int)
  id: number;
}

import { CreateStorageInput } from './create-storage.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStorageInput extends PartialType(CreateStorageInput) {
  @Field(() => Int)
  id: number;
}

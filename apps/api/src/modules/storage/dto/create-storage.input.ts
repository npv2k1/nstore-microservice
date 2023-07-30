import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateStorageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

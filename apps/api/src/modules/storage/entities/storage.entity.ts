import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Storage {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

import { Field, Float, InputType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@InputType({
  isAbstract: true,
})
export class InventoryInput {
  _id?: string;

  name?: string;

  @Field(() => Float)
  price: number;

  categories?: string[];

  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  properties: JSON;
}

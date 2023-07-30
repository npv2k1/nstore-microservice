import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@InputType({
  isAbstract: true,
})
export class ProductInput {
  _id?: string;

  name?: string;

  @Field(() => Int)
  price: number;

  @Field(() => String, {
    nullable: true,
  })
  image: string;

  categories?: string[];

  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  properties: JSON;
}

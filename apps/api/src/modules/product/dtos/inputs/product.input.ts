import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@InputType({
  isAbstract: true,
})
export class ProductInput {
  _id?: string;

  @Field(() => String, {
    nullable: false,
  })
  name?: string;

  @Field(() => Int, {
    nullable: false,
  })
  price: number;

  @Field(() => String, {
    nullable: true,
  })
  image: string;

  @Field(() => [String], {
    nullable: true,
  })
  gallery?: string[];

  @Field(() => Boolean, {
    nullable: true,
  })
  available: boolean;

  @Field(() => String, {
    nullable: true,
  })
  status?: string;

  @Field(() => [String], {
    nullable: true,
  })
  tags?: string[];

  @Field(() => [String], {
    nullable: true,
  })
  categories?: string[];

  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  properties: JSON;

  @Field(() => [String], {
    nullable: true,
  })
  variants?: string[];
}

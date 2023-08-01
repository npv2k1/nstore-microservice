import { InputType, Int } from '@nestjs/graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class CartInput {
  _id?: string;

  product: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => String, {
    nullable: true,
  })
  customer?: string;
}

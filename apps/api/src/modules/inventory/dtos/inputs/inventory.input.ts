import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class InventoryInput {
  _id?: string;

  @Field(() => String)
  product: String;

  @Field(() => Int)
  quantity: number;
}

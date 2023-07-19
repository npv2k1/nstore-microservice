import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class FlashSaleInput {
  @Field(() => String, {
    nullable: true,
  })
  _id?: string;

  @Field(() => String, {
    nullable: false,
  })
  code: string;
}

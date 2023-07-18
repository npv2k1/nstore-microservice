import { Field, InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class OrderInput {
  _id?: string;

  @Field(() => String, {
    nullable: true,
  })
  customer?: string;

  @Field(() => String, {
    nullable: true,
  })
  coupon: string;

  @Field(() => String, {
    nullable: false,
  })
  deliveryAddress: string;

  @Field(() => String, {
    nullable: false,
  })
  phone: string;
}

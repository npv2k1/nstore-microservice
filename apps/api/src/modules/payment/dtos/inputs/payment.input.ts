import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class PaymentInput {
  @Field(() => String, {
    nullable: true,
  })
  _id?: string;

  @Field(() => String, {
    nullable: true,
  })
  order: string;

  @Field(() => String, {
    nullable: true,
  })
  paymentMethod: string;

  @Field(() => String, {
    nullable: true,
  })
  paymentStatus: string;

  @Field(() => String, {
    nullable: true,
  })
  paymentDate?: Date;

  @Field(() => Int, {
    nullable: true,
  })
  paymentAmount: number;
}

import { PaymentMethod } from '@/common/enums/payment.enum';
import { Field, InputType, registerEnumType } from '@nestjs/graphql';

registerEnumType(PaymentMethod, {
  name: 'PaymentMethod',
});

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

  @Field(() => PaymentMethod, {
    nullable: false,
    defaultValue: PaymentMethod.COD,
  })
  paymentMethod: PaymentMethod;
}

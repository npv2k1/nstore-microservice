import { CouponType, DiscountType } from '@/common/enums/coupon.enum';
import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';

registerEnumType(DiscountType, {
  name: 'DiscountType',
});
registerEnumType(CouponType, {
  name: 'CouponType',
});

@InputType({
  isAbstract: true,
})
export class CouponInput {
  @Field(() => String, {
    nullable: true,
  })
  _id?: string;

  @Field(() => String, {
    nullable: false,
  })
  code: string;

  @Field(() => Boolean, {
    defaultValue: true,
  })
  status?: boolean;

  @Field(() => Int, {
    nullable: false,
  })
  discountValue: number;

  @Field(() => DiscountType, {})
  discountType: DiscountType;

  @Field(() => CouponType)
  type: CouponType;

  @Field(() => String, {
    nullable: true,
  })
  product?: string;
}

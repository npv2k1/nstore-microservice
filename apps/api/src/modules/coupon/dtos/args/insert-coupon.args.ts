import { ArgsType, Field } from '@nestjs/graphql';
import { CouponInsertInput } from '../inputs/coupon-insert.input';

@ArgsType()
export class InsertManyCouponArgs {
  @Field(() => [CouponInsertInput], { nullable: false })
  data!: CouponInsertInput[];
}

@ArgsType()
export class InsertOneCouponArgs {
  @Field(() => CouponInsertInput, { nullable: false })
  data!: CouponInsertInput;
}

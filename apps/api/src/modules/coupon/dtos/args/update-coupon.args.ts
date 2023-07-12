import { ArgsType, Field } from '@nestjs/graphql';
import { CouponQueryInput } from '../inputs/coupon-query.input';
import { CouponUpdateInput } from '../inputs/coupon-update.input';

@ArgsType()
export class UpdateManyCouponArgs {
  @Field(() => CouponQueryInput, { nullable: true })
  query?: CouponQueryInput;

  @Field(() => CouponUpdateInput, { nullable: false })
  data!: CouponUpdateInput;
}

@ArgsType()
export class UpdateOneCouponArgs {
  @Field(() => CouponQueryInput, { nullable: false })
  query!: CouponQueryInput;

  @Field(() => CouponUpdateInput, { nullable: false })
  data!: CouponUpdateInput;
}

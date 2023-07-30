import { ArgsType, Field } from '@nestjs/graphql';

import { CouponQueryInput } from '../inputs/coupon-query.input';

@ArgsType()
export class FindManyCouponArgs {
  @Field(() => CouponQueryInput, { nullable: true })
  query?: CouponQueryInput;
}

@ArgsType()
export class FindOneCouponArgs {
  @Field(() => CouponQueryInput, { nullable: false })
  query!: CouponQueryInput;
}

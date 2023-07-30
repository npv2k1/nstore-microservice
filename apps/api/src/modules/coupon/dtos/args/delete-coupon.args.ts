import { ArgsType, Field } from '@nestjs/graphql';

import { CouponQueryInput } from '../inputs/coupon-query.input';

@ArgsType()
export class DeleteManyCouponArgs {
  @Field(() => CouponQueryInput, { nullable: true })
  query?: CouponQueryInput;
}
@ArgsType()
export class DeleteOneCouponArgs {
  @Field(() => CouponQueryInput, { nullable: false })
  query!: CouponQueryInput;
}

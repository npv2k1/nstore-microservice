import { ArgsType, Field } from '@nestjs/graphql';

import { CouponInsertInput } from '../inputs/coupon-insert.input';
import { CouponQueryInput } from '../inputs/coupon-query.input';

@ArgsType()
export class UpsertOneCouponArgs {
  @Field(() => CouponQueryInput, { nullable: true })
  query?: CouponQueryInput;

  @Field(() => CouponInsertInput, { nullable: false })
  data: CouponInsertInput;
}

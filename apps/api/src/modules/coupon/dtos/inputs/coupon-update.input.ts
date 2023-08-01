import { InputType, PartialType } from '@nestjs/graphql';

import { CouponInsertInput } from './coupon-insert.input';

@InputType()
export class CouponUpdateInput extends PartialType(CouponInsertInput) {}

import { InputType, PartialType } from '@nestjs/graphql';
import { CouponInput } from './coupon.input';

@InputType()
export class CouponQueryInput extends PartialType(CouponInput) {}

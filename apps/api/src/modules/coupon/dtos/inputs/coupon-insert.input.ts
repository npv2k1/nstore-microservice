import { InputType } from '@nestjs/graphql';
import { CouponInput } from './coupon.input';

@InputType()
export class CouponInsertInput extends CouponInput {}

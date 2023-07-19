import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponRepository } from './coupon.repository';
import { CouponResolver } from './coupon.resolver';
import { CouponService } from './coupon.service';
import { Coupon, CouponSchema } from './entities/coupon.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Coupon.name, schema: CouponSchema }])],
  providers: [CouponResolver, CouponService, CouponRepository],
})
export class CouponModule {}

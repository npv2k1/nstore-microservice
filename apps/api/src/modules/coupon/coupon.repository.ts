import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@/common/mongoose/mongoose';

import { Coupon, CouponDocument } from './entities/coupon.entity';

@Injectable()
export class CouponRepository
  extends BaseRepository<CouponDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(Coupon.name) model: Model<CouponDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

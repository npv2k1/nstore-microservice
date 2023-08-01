import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { DeleteManyCouponArgs, DeleteOneCouponArgs } from './dtos/args/delete-coupon.args';
import { FindManyCouponArgs, FindOneCouponArgs } from './dtos/args/find-coupon.args';
import { InsertManyCouponArgs, InsertOneCouponArgs } from './dtos/args/insert-coupon.args';
import { UpdateManyCouponArgs, UpdateOneCouponArgs } from './dtos/args/update-coupon.args';
import { UpsertOneCouponArgs } from './dtos/args/upsert-coupon.args';
import { CouponRepository } from './coupon.repository';

@Injectable()
export class CouponService {
  constructor(private readonly CouponRepo: CouponRepository) {}

  async couponSuccess() {
    // return await this.orderService.emit('coupon_success', { message: 'Coupon Success' });
  }

  async create(args: InsertOneCouponArgs) {
    return this.CouponRepo.create(args.data);
  }

  async findMany(args: FindManyCouponArgs) {
    const Coupons = await this.CouponRepo.findAll(args.query);
    return Coupons;
  }

  async findOne(args: FindOneCouponArgs) {
    return this.CouponRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneCouponArgs) {
    return await this.CouponRepo.create(args.data);
  }

  async insertMany(args: InsertManyCouponArgs) {
    return await this.CouponRepo.create(args.data);
  }

  async updateOne(args: UpdateOneCouponArgs) {
    return await this.CouponRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyCouponArgs) {
    return await this.CouponRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneCouponArgs) {
    return await this.CouponRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyCouponArgs) {
    return await this.CouponRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneCouponArgs) {
    return await this.CouponRepo.updateOneOrCreate(args.query, args.data);
  }
}

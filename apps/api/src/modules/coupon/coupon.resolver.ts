import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';

import { DeleteManyCouponArgs, DeleteOneCouponArgs } from './dtos/args/delete-coupon.args';
import { FindManyCouponArgs, FindOneCouponArgs } from './dtos/args/find-coupon.args';
import { InsertManyCouponArgs, InsertOneCouponArgs } from './dtos/args/insert-coupon.args';
import { UpdateManyCouponArgs, UpdateOneCouponArgs } from './dtos/args/update-coupon.args';
import { UpsertOneCouponArgs } from './dtos/args/upsert-coupon.args';
import { Coupon } from './entities/coupon.entity';
import { CouponService } from './coupon.service';

@Resolver(() => Coupon)
export class CouponResolver {
  constructor(private readonly couponService: CouponService) {}
  @Query(() => [Coupon], {
    name: `${pluralize.plural(Coupon.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyCouponArgs) {
    return this.couponService.findMany(args);
  }

  @Query(() => Coupon, { name: Coupon.name.toLowerCase() })
  async findOne(@Args() args: FindOneCouponArgs) {
    console.log('🚀 ~ file: coupon.resolver.ts:23 ~ CouponResolver ~ findOne ~ args:', args);
    return this.couponService.findOne(args);
  }

  @Mutation(() => Coupon, {
    name: `deleteOne${pluralize.singular(Coupon.name)}`,
  })
  async deleteOne(@Args() args: DeleteOneCouponArgs) {
    return await this.couponService.deleteOne(args);
  }

  // @Mutation(() => Coupon, {
  //   name: `deleteMany${pluralize.plural(Coupon.name)}`,
  // })
  // async deleteMany(@Args() args: DeleteManyCouponArgs) {
  //   return await this.couponService.deleteMany(args);
  // }

  @Mutation(() => Coupon, {
    name: `insertOne${pluralize.singular(Coupon.name)}`,
  })
  async insertOne(@Args() args: InsertOneCouponArgs) {
    return await this.couponService.insertOne(args);
  }

  // @Mutation(() => Coupon, {
  //   name: `insertMany${pluralize.plural(Coupon.name)}`,
  // })
  // async insertMany(@Args() args: InsertManyCouponArgs) {
  //   return await this.couponService.insertMany(args);
  // }

  @Mutation(() => Coupon, {
    name: `updateOne${pluralize.singular(Coupon.name)}`,
  })
  async updateOne(@Args() args: UpdateOneCouponArgs) {
    return await this.couponService.updateOne(args);
  }

  // @Mutation(() => Coupon, {
  //   name: `updateMany${pluralize.plural(Coupon.name)}`,
  // })
  // async updateMany(@Args() args: UpdateManyCouponArgs) {
  //   return await this.couponService.updateMany(args);
  // }

  @Mutation(() => Coupon, {
    name: `upsertOne${pluralize.singular(Coupon.name)}`,
  })
  async upsertOne(@Args() args: UpsertOneCouponArgs) {
    return await this.couponService.upsertOne(args);
  }
}

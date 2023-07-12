import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongoosePaginate, mongooseAggregatePaginate, mongooseAutopopulate } from '@/common/mongoose/plugin';

@Schema()
@ObjectType()
export class Coupon {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  name: string;
}

export type CouponDocument = Coupon & Document;
export const CouponSchema = SchemaFactory.createForClass(Coupon);
CouponSchema.plugin(mongoosePaginate);
CouponSchema.plugin(mongooseAggregatePaginate);
CouponSchema.plugin(mongooseAutopopulate);

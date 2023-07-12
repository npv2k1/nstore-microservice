import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongoosePaginate, mongooseAggregatePaginate, mongooseAutopopulate } from '@/common/mongoose/plugin';
import { Product } from '@/modules/product/entities/product.entity';

@Schema()
@ObjectType()
export class Coupon {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop()
  status: boolean

  @Prop({
    unique: true,
  })
  @Field(() => String, {
    nullable: true,
  })
  code: string;

  @Prop({
    type: Number,
    default: 0,
  })
  @Field(() => Number, {
    nullable: true,
  })
  discountValue: number;

  @Prop({
    type: String,
    enum: ['percent', 'fixed'],
  })
  discountType: string;

  @Prop({
    type: String,
    enum: ['product', 'order', 'delivery'],
  })
  type: string;

  @Prop()
  @Field(() => Number, {
    nullable: true,
  })
  product: Product;
}

export type CouponDocument = Coupon & Document;
export const CouponSchema = SchemaFactory.createForClass(Coupon);
CouponSchema.plugin(mongoosePaginate);
CouponSchema.plugin(mongooseAggregatePaginate);
CouponSchema.plugin(mongooseAutopopulate);

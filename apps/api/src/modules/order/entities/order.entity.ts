import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { mongoosePaginate, mongooseAggregatePaginate, mongooseAutopopulate } from '@/common/mongoose/plugin';
import { Product } from '@/modules/product/entities/product.entity';
import { Customer } from '@/modules/customer/entities/customer.entity';
import { Coupon } from '@/modules/coupon/entities/coupon.entity';

@Schema()
@ObjectType()
export class OrderItem {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Product.name,
  })
  product: Product;

  @Prop()
  @Field(() => Number, {
    nullable: true,
  })
  quantity: number;

  @Prop()
  @Field(() => Number, {
    nullable: true,
  })
  subtotal: number;
}

export type OrderItemDocument = OrderItem & Document;
export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema()
@ObjectType()
export class Order {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  status: string;

  deliveryFee: number;

  deliveryAddress: string;

  deliveryStatus: string;

  total: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Customer.name,
  })
  customer: Customer;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Coupon.name,
  })
  coupon: Coupon;

  @Prop({
    type: [OrderItemSchema],
    default: [],
  })
  items: OrderItem[];
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
OrderSchema.plugin(mongoosePaginate);
OrderSchema.plugin(mongooseAggregatePaginate);
OrderSchema.plugin(mongooseAutopopulate);

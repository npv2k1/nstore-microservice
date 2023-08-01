import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { PaymentMethod } from '@/common/enums/payment.enum';
import {
  mongooseAggregatePaginate,
  mongooseAutopopulate,
  mongoosePaginate,
} from '@/common/mongoose/plugin';
import { Coupon } from '@/modules/coupon/entities/coupon.entity';
import { Customer } from '@/modules/customer/entities/customer.entity';
import { Payment } from '@/modules/payment/entities/payment.entity';
import { Product } from '@/modules/product/entities/product.entity';

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
    autopopulate: true,
  })
  product: Product;

  @Prop()
  price: number;

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

// export type OrderItemDocument = OrderItem & Document;
export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
OrderItemSchema.plugin(mongooseAutopopulate);

@Schema()
@ObjectType()
export class Order {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop({
    type: String,
    default: 'pending',
  })
  status: string;

  @Prop({
    type: Number,
    default: 0,
  })
  deliveryFee: number;

  @Prop({
    type: String,
    default: '',
  })
  deliveryAddress: string;

  @Prop({
    type: String,
    default: '',
  })
  phone: string;

  @Prop({
    type: String,
    default: '',
  })
  deliveryStatus: string;

  @Prop({
    type: Number,
    default: 0,
  })
  total: number;

  @Prop({
    type: Number,
    default: 0,
  })
  productTotal: number;

  @Prop({
    type: Number,
    default: 0,
  })
  discount: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Customer.name,
    autopopulate: true,
  })
  customer: Customer;

  @Field(() => Coupon, { nullable: true })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Coupon.name,
    autopopulate: true,
  })
  coupon: Coupon;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Payment.name,
    autopopulate: true,
  })
  payment: Payment;

  @Prop({
    type: String,
    enum: PaymentMethod,
    default: PaymentMethod.COD,
    autopopulate: true,
  })
  paymentMethod: string;

  @Prop({
    type: [OrderItemSchema],
    required: true,
    default: [],
    autopopulate: true,
  })
  items: OrderItem[];
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
OrderSchema.plugin(mongoosePaginate);
OrderSchema.plugin(mongooseAggregatePaginate);
OrderSchema.plugin(mongooseAutopopulate);

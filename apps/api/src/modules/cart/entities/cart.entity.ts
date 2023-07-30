import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { mongoosePaginate, mongooseAggregatePaginate, mongooseAutopopulate } from '@/common/mongoose/plugin';
import { Product } from '@/modules/product/entities/product.entity';
import { Customer } from '@/modules/customer/entities/customer.entity';

@Schema()
@ObjectType()
export class Cart {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Customer.name,
    autopopulate: true,
  })
  customer: Customer;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Product.name,
    autopopulate: true,
  })
  product: Product;

  @Prop({ required: true, default: 1 })
  quantity: number;

  @Prop({
    type: Number,
    // Calculate subtotal
    get: function () {
      return this.product.price * this.quantity;
    },
  })
  subtotal: number;
}

export type CartDocument = Cart & Document;
export const CartSchema = SchemaFactory.createForClass(Cart);
CartSchema.index({ customer: 1, product: 1 }, { unique: true });
CartSchema.plugin(mongoosePaginate);
CartSchema.plugin(mongooseAggregatePaginate);
CartSchema.plugin(mongooseAutopopulate);

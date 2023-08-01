import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import {
  mongooseAggregatePaginate,
  mongooseAutopopulate,
  mongoosePaginate,
} from '@/common/mongoose/plugin';
import { Product } from '@/modules/product/entities/product.entity';

@Schema()
@ObjectType()
export class Inventory {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Product.name,
    autopopulate: true,
  })
  @Field(() => Product)
  product: Product;

  @Prop({
    type: Number,
    default: 0,
  })
  @Field(() => Int, { defaultValue: 0 })
  quantity: number;
}

export type InventoryDocument = Inventory & Document;
export const InventorySchema = SchemaFactory.createForClass(Inventory);
InventorySchema.index({ product: 1, quantity: 1 }, { unique: true });

InventorySchema.plugin(mongoosePaginate);
InventorySchema.plugin(mongooseAggregatePaginate);
InventorySchema.plugin(mongooseAutopopulate);

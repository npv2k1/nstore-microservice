import {
  mongooseAggregatePaginate,
  mongooseAutopopulate,
  mongoosePaginate,
} from '@/common/mongoose/plugin';
import { Product } from '@/modules/product/entities/product.entity';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

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
  })
  @Field(()=> Product)
  product: Product;

  @Prop({
    type: Number,
    default: 0,
  })
  @Field(() => Int, { defaultValue: 0 })
  quantity: number;

  @Prop({
    type: Number,
    default: 0,
  })
  @Field(() => Float)
  salePrice: number;

  @Prop({
    type: Number,
    default: 0,
  })
  @Field(() => Float)
  purchasePrice: number;
}

export type InventoryDocument = Inventory & Document;
export const InventorySchema = SchemaFactory.createForClass(Inventory);
InventorySchema.plugin(mongoosePaginate);
InventorySchema.plugin(mongooseAggregatePaginate);
InventorySchema.plugin(mongooseAutopopulate);

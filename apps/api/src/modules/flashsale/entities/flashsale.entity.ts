import { Field, Int, ObjectType } from '@nestjs/graphql';
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
export class FlashSale {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop()
  status: string;

  @Prop()
  description?: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  @Field(() => Int, {
    nullable: false,
  })
  salePrice: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Product.name,
    autopopulate: true,
  })
  @Field(() => Product, {
    nullable: true,
  })
  product: Product;
}

export type FlashSaleDocument = FlashSale & Document;
export const FlashSaleSchema = SchemaFactory.createForClass(FlashSale);
FlashSaleSchema.plugin(mongoosePaginate);
FlashSaleSchema.plugin(mongooseAggregatePaginate);
FlashSaleSchema.plugin(mongooseAutopopulate);
// Index unique flashsale

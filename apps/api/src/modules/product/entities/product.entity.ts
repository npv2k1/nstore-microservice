import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GraphQLJSONObject } from 'graphql-type-json';
import mongoose, { Document } from 'mongoose';

import {
  mongooseAggregatePaginate,
  mongooseAutopopulate,
  mongoosePaginate,
} from '@/common/mongoose/plugin';
import { Category } from '@/modules/category/entities/category.entity';

@Schema()
@ObjectType()
export class Product {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop({
    type: mongoose.Schema.Types.Mixed,
  })
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  properties: JSON;

  @Prop({
    type: String,
    required: true,
  })
  @Field(() => String, {
    nullable: true,
  })
  name: string;

  @Prop({
    type: Number,
    required: true,
  })
  @Field(() => Int, {
    nullable: true,
  })
  price: number;

  @Prop({
    type: Number,
  })
  @Field(() => Int, {
    nullable: true,
  })
  salePrice: number;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  barcode: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  image: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  unit: string;

  @Prop({
    type: String,
    enum: ['simple', 'variable'],
    default: 'simple',
  })
  productType: string;

  @Prop({
    type: [String],
  })
  @Field(() => [String], {
    nullable: true,
  })
  gallery?: string[];

  @Prop()
  @Field(() => Number, {
    nullable: true,
  })
  quantity: number;

  @Prop()
  @Field(() => Boolean, {
    nullable: true,
  })
  available: boolean;

  @Prop({
    type: String,
    enum: ['published', 'draft', 'trash'],
    default: 'draft',
  })
  @Field(() => String, {
    nullable: true,
  })
  status?: string;

  @Prop({
    type: [String],
  })
  tags?: string[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product.name,
      },
    ],
  })
  @Field(() => [Product], {
    nullable: true,
  })
  variants?: Product[];

  // Category
  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category.name,
      },
    ],
    autopopulate: true,
  })
  @Field(() => [Category], {
    nullable: true,
  })
  categories?: Category[] | string[];
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.plugin(mongoosePaginate);
ProductSchema.plugin(mongooseAggregatePaginate);
ProductSchema.plugin(mongooseAutopopulate);

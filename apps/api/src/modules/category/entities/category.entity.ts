import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import {
  mongooseAggregatePaginate,
  mongooseAutopopulate,
  mongoosePaginate,
} from '@/common/mongoose/plugin';

@Schema()
@ObjectType()
export class Category {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  @Field(() => String, {
    nullable: true,
  })
  name: string;

  @Prop({
    unique: true,
    type: String,
    lowercase: true,
  })
  @Field(() => String, {
    nullable: true,
  })
  slug?: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  image?: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    autopopulate: true,
  })
  @Field(() => Category, {
    nullable: true,
  })
  parent?: Category;
}

export type CategoryDocument = Category & Document;
export const CategorySchema = SchemaFactory.createForClass(Category);
CategorySchema.plugin(mongoosePaginate);
CategorySchema.plugin(mongooseAggregatePaginate);
CategorySchema.plugin(mongooseAutopopulate);

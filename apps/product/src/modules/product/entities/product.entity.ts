import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  mongoosePaginate,
  mongooseAggregatePaginate,
  mongooseAutopopulate,
} from '@/common/mongoose/plugin';

@Schema()
@ObjectType()
export class Product {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  name: string;

  @Prop()
  @Field(() => Number, {
    nullable: true,
  })
  price: number;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  image: string;

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
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.plugin(mongoosePaginate);
ProductSchema.plugin(mongooseAggregatePaginate);
ProductSchema.plugin(mongooseAutopopulate);

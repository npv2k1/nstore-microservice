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
export class Order {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  name: string;
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
OrderSchema.plugin(mongoosePaginate);
OrderSchema.plugin(mongooseAggregatePaginate);
OrderSchema.plugin(mongooseAutopopulate);

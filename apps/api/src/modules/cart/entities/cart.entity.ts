import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongoosePaginate, mongooseAggregatePaginate, mongooseAutopopulate } from '@/common/mongoose/plugin';

@Schema()
@ObjectType()
export class Cart {
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

export type CartDocument = Cart & Document;
export const CartSchema = SchemaFactory.createForClass(Cart);
CartSchema.plugin(mongoosePaginate);
CartSchema.plugin(mongooseAggregatePaginate);
CartSchema.plugin(mongooseAutopopulate);

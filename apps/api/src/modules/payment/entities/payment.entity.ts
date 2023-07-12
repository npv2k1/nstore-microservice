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
export class Payment {
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

export type PaymentDocument = Payment & Document;
export const PaymentSchema = SchemaFactory.createForClass(Payment);
PaymentSchema.plugin(mongoosePaginate);
PaymentSchema.plugin(mongooseAggregatePaginate);
PaymentSchema.plugin(mongooseAutopopulate);

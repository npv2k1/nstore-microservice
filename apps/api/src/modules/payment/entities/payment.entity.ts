import { Field, Int, ObjectType } from '@nestjs/graphql';
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
  order: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  paymentMethod: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  paymentStatus: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  paymentDate: Date;

  @Prop()
  @Field(() => Int, {
    nullable: true,
  })
  paymentAmount: number;

  
}

export type PaymentDocument = Payment & Document;
export const PaymentSchema = SchemaFactory.createForClass(Payment);
PaymentSchema.plugin(mongoosePaginate);
PaymentSchema.plugin(mongooseAggregatePaginate);
PaymentSchema.plugin(mongooseAutopopulate);

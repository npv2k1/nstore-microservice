import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { mongoosePaginate, mongooseAggregatePaginate, mongooseAutopopulate } from '@/common/mongoose/plugin';
import { Order } from '@/modules/order/entities/order.entity';

@Schema()
@ObjectType()
export class Shipment {
  @Field(() => String, {
    nullable: false,
  })
  _id?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Order.name
  })
  order: Order;

  status: string;
}

export type ShipmentDocument = Shipment & Document;
export const ShipmentSchema = SchemaFactory.createForClass(Shipment);
ShipmentSchema.plugin(mongoosePaginate);
ShipmentSchema.plugin(mongooseAggregatePaginate);
ShipmentSchema.plugin(mongooseAutopopulate);

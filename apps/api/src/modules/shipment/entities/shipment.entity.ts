import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongoosePaginate, mongooseAggregatePaginate, mongooseAutopopulate } from '@/common/mongoose/plugin';

@Schema()
@ObjectType()
export class Shipment {
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

export type ShipmentDocument = Shipment & Document;
export const ShipmentSchema = SchemaFactory.createForClass(Shipment);
ShipmentSchema.plugin(mongoosePaginate);
ShipmentSchema.plugin(mongooseAggregatePaginate);
ShipmentSchema.plugin(mongooseAutopopulate);

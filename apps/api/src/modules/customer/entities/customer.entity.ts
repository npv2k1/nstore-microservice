import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Customer {
  _id: string;

  @Prop({
    required: true,
    index: true,
  })
  @Field(() => Int, {
    nullable: true,
  })
  uid: number;

  @Prop({
    required: true,
  })
  @Field(() => String, {
    nullable: false,
  })
  email: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  fullName: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  address: string;

  @Prop()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth: Date;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  phone: string;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  gender: boolean;

  @Prop()
  @Field(() => String, {
    nullable: true,
  })
  picture?: string;
}
export type CustomerDocument = Customer & Document;

export const CustomerSchema = SchemaFactory.createForClass(Customer);

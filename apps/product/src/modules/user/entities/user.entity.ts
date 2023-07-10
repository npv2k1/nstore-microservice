import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class User {
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

  @Prop({
    required: true,
  })
  @Field(() => String, {
    nullable: false,
  })
  picture: string;
}
export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

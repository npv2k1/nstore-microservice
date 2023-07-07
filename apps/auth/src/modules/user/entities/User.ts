import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { UserRole } from './UserRole';

@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  fullName!: string | null;

  @Field(() => String, {
    nullable: true,
  })
  bio!: string | null;

  @Field(() => Boolean, {
    nullable: true,
  })
  gender!: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  password!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  address!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  phone!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  picture: string;

  UserRole?: Array<UserRole>;

  roles?: Array<string> | null;
}
export { User };

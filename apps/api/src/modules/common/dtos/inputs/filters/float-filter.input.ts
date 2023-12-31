import { Field, Float, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

@InputType({
  isAbstract: true,
  description: undefined,
})
export class FloatFilter {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  equals?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  in?: number[];

  @ApiProperty({
    required: false,
    type: [Number],
  })
  @IsOptional()
  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  notIn?: number[];

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lt?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lte?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gt?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gte?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  not?: number;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class FloatNullableFilter {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  equals?: number | null;

  @ApiProperty({
    required: false,
    type: [Number],
  })
  @IsOptional()
  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  in?: number[] | null;

  @ApiProperty({
    required: false,
    type: [Number],
  })
  @IsOptional()
  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  notIn?: number[] | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lt?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lte?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gt?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gte?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  not?: number;
}

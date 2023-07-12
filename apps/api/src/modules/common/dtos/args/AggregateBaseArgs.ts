import { Type as NestjsType } from '@nestjs/common';
import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export function AggregateBaseArgs<WhereInput>(
  WhereInputClass: NestjsType<WhereInput>
) {
  @ArgsType()
  abstract class AggregateManyBase {
    @ApiProperty({
      required: false,
      type: () => WhereInputClass,
    })
    @Field(() => WhereInputClass, { nullable: true })
    @Type(() => WhereInputClass)
    where?: WhereInput;

    // @ApiProperty({
    //   required: false,
    //   type: [String],
    // })
    // @Field(() => [String], { nullable: true })
    // orderBy?: Array<string>;

    @ApiProperty({
      required: false,
      type: Number,
    })
    @Field(() => Number, { nullable: true })
    skip?: number;

    @ApiProperty({
      required: false,
      type: Number,
    })
    @Field(() => Number, { nullable: true })
    take?: number;
  }

  return AggregateManyBase;
}

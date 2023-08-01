import { Type as NestjsType } from '@nestjs/common';
import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export function FindUniqueBaseArgs<WhereUniqueInput>(
  WhereUniqueInputClass: NestjsType<WhereUniqueInput>
) {
  @ArgsType()
  abstract class FindUniqueBase {
    @ApiProperty({
      required: false,
      type: () => WhereUniqueInputClass,
    })
    @Type(() => WhereUniqueInputClass)
    @Field(() => WhereUniqueInputClass, { nullable: false })
    where!: WhereUniqueInput;
  }
  return FindUniqueBase;
}

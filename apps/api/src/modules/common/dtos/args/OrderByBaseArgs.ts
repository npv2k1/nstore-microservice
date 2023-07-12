import { Type as NestjsType } from '@nestjs/common';
import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export function OrderByBaseArgs<OrderByInput>(
  OrderByInputClass: NestjsType<OrderByInput>
) {
  @ArgsType()
  abstract class FindManyBase {
    @ApiProperty({
      required: false,
      type: [OrderByInputClass],
    })
    @Field(() => [OrderByInputClass], { nullable: true })
    orderBy?: Array<OrderByInput>;
  }

  return FindManyBase;
}

import { Type as NestjsType } from '@nestjs/common';
import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export function DeleteBaseArgs<WhereUniqueInput>(
  WhereUniqueInputClass: NestjsType<WhereUniqueInput>
): any {
  @ArgsType()
  abstract class DeleteBase {
    @ApiProperty({
      required: false,
      type: () => WhereUniqueInputClass,
    })
    @Field(() => WhereUniqueInputClass, { nullable: true })
    @Type(() => WhereUniqueInputClass)
    where?: WhereUniqueInput;
  }
  return DeleteBase;
}

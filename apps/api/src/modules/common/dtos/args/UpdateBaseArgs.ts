import { Type as NestjsType } from '@nestjs/common';
import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export function UpdateBaseArgs<WhereUniqueInput, UpdateInput>(
  WhereUniqueInputClass: NestjsType<WhereUniqueInput>,
  UpdateInputClass: NestjsType<UpdateInput>
): any {
  @ArgsType()
  abstract class DeleteBase {
    @ApiProperty({
      required: false,
      type: () => WhereUniqueInputClass,
    })
    @Field(() => WhereUniqueInputClass, { nullable: false })
    @Type(() => WhereUniqueInputClass)
    where!: WhereUniqueInput;

    @ApiProperty({
      required: false,
      type: () => UpdateInputClass,
    })
    @Field(() => UpdateInputClass, { nullable: false })
    @Type(() => UpdateInputClass)
    data!: UpdateInput;
  }
  return DeleteBase;
}

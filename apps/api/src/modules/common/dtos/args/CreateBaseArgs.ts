import { Type as NestjsType } from '@nestjs/common';
import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

/**
 * It creates a class that extends ArgsType and has a data property of type CreateInputClass
 * @param CreateInputClass - The class of the input object that will be used to create the entity.
 * @returns A class that extends ArgsType
 */
export function CreateBaseArgs<CreateInput>(CreateInputClass: NestjsType<CreateInput>) {
  @ArgsType()
  abstract class CreateBase {
    @ApiProperty({
      required: false,
      type: () => CreateInputClass,
    })
    @Field(() => CreateInputClass, { nullable: false })
    @Type(() => CreateInputClass)
    data!: CreateInput;
  }

  return CreateBase;
}

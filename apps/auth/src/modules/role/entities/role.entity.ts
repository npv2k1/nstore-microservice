import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IRole } from '../interfaces/role.interface';

@ObjectType()
export class Role implements IRole {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  description!: string;
}

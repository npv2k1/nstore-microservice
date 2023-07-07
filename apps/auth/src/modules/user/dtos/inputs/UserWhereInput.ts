import { Field, InputType, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { IntFilter } from '@modules/common/dtos/inputs/filters/int-filter.input';
import { StringFilter } from '@modules/common/dtos/inputs/filters';

@InputType()
export class UserWhereInput {
  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  password?: StringFilter;

  @ApiProperty({
    required: false,
    type: [UserWhereInput],
  })
  @Field(() => [UserWhereInput], { nullable: true })
  @Type(() => UserWhereInput)
  OR: Array<UserWhereInput>;
}

@InputType()
export class WhereUniqueUserInput {
  @Field(() => Int)
  id!: number;
}

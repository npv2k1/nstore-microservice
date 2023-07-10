import { ArgsType, Field } from '@nestjs/graphql';
import { UserQueryInput, UserQueryUniqueInput } from '../inputs/user-query.input';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UserOrderByInput } from '../inputs/user-order-by.input';

@ArgsType()
export class FindManyUserArgs {
  @Field(() => UserQueryInput, { nullable: true })
  where?: UserQueryInput;
  @ApiProperty({
    required: false,
    type: [UserOrderByInput],
  })
  @Field(() => [UserOrderByInput], { nullable: true })
  @Type(() => UserOrderByInput)
  orderBy?: Array<UserOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

@ArgsType()
export class FindOneUserArgs {
  @Field(() => UserQueryUniqueInput, { nullable: false })
  where!: UserQueryUniqueInput;
}

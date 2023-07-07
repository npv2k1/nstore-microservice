import { ArgsType, Field } from '@nestjs/graphql';
import { UserWhereInput } from '../inputs/UserWhereInput';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
@ArgsType()
class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

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
export { UserAggregateArgs };

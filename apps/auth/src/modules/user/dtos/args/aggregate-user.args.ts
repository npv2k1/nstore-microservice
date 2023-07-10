import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UserQueryInput } from '../inputs/user-query.input';
@ArgsType()
class AggregateUserArgs {
  @Field(() => UserQueryInput, { nullable: true })
  where?: UserQueryInput;

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
export { AggregateUserArgs };

import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

@ArgsType()
class UserFindByPkArgs {
  @ApiProperty({
    required: true,
    type: () => Number,
  })
  @Field(() => Int, { nullable: false })
  @Type(() => Number)
  id: number;
}

export { UserFindByPkArgs };

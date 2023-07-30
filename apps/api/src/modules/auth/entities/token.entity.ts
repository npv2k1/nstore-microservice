import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@ObjectType()
class Token {
  @ApiProperty({
    required: true,
    type: String,
  })
  @Field(() => String)
  accessToken!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @Field(() => String)
  refreshToken!: string;
}
export { Token };

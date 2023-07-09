import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

@InputType()
class LoginInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @Type(() => String)
  @Field(() => String, {
    nullable: false,
  })
  email: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @Type(() => String)
  @Field(() => String, {
    nullable: false,
  })
  password: string;
}

export { LoginInput };

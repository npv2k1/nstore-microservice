import { Field, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

@ObjectType()
class Role {
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
export { Role };

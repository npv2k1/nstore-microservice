import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class Input {
  @Field(() => String)
  id: string;
}

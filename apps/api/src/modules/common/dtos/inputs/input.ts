import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class Input {
  @Field(() => String)
  id: string;
}

@InputType()
export class PaginateOptionsInput {
  // sort?: object | string | undefined;

  @Field(() => Int, { nullable: true })
  offset?: number | undefined;
  @Field(() => Int, { nullable: true })
  page?: number | undefined;
  @Field(() => Int, { nullable: true })
  limit?: number | undefined;



  // pagination?: boolean | undefined;
  // allowDiskUse?: boolean | undefined;
  // countQuery?: object | undefined;
}

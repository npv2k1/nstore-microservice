import { Field, InputType, Int } from '@nestjs/graphql';
@InputType({
  isAbstract: true,
})
export class UserInput {
  @Field(()=>Int, {nullable: true})
  id?: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(()=>String, {nullable: true})
  fullName?: string;

  @Field(() => String, { nullable: true })
  address!: string;

  @Field(() => String, { nullable: true })
  phone!: string;

  @Field(() => [String], { nullable: true })
  roles?: Array<string> | null;

  @Field(() => String, {
    nullable: true,
  })
  bio!: string | null;

  @Field(() => Boolean, {
    nullable: true,
  })
  gender!: boolean | null;
}

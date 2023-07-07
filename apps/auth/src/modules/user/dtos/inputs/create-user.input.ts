import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  fullName: string;

  @Field(() => String, { nullable: true })
  address!: string;

  @Field(() => String, { nullable: true })
  phone!: string;

  @Field(() => [String], { nullable: true })
  roles?: Array<string> | null;

  @Field(() => Int, { nullable: true })
  avatarFileId: number;

  @Field(() => String, {
    nullable: true,
  })
  bio!: string | null;

  @Field(() => Boolean, {
    nullable: true,
  })
  gender!: boolean | null;
}

export { CreateUserInput };

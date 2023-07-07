import { InputType } from "@nestjs/graphql";

@InputType()
class UserCreateInput {
  email: string;


}

export { UserCreateInput };
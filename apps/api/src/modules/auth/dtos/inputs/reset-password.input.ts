import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ForgotPasswordInput {
  @Field()
  email: string;
}
@InputType()
export class ResetPasswordInput {
  @Field()
  token: string;
  @Field()
  password: string;
}

@InputType()
export class ChangePasswordInput {
  @Field()
  oldPassword: string;
  @Field()
  newPassword: string;
}

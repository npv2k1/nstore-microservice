import { InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class PaymentInput {
  _id?: string;

  name?: string;
}

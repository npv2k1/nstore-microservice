import { ArgsType, Field } from '@nestjs/graphql';

import { PaymentQueryInput } from '../inputs/payment-query.input';

@ArgsType()
export class DeleteManyPaymentArgs {
  @Field(() => PaymentQueryInput, { nullable: true })
  query?: PaymentQueryInput;
}
@ArgsType()
export class DeleteOnePaymentArgs {
  @Field(() => PaymentQueryInput, { nullable: false })
  query!: PaymentQueryInput;
}

import { ArgsType, Field } from '@nestjs/graphql';

import { PaymentQueryInput } from '../inputs/payment-query.input';

@ArgsType()
export class FindManyPaymentArgs {
  @Field(() => PaymentQueryInput, { nullable: true })
  query?: PaymentQueryInput;
}

@ArgsType()
export class FindOnePaymentArgs {
  @Field(() => PaymentQueryInput, { nullable: false })
  query!: PaymentQueryInput;
}

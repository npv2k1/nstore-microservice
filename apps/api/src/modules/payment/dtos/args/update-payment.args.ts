import { ArgsType, Field } from '@nestjs/graphql';

import { PaymentQueryInput } from '../inputs/payment-query.input';
import { PaymentUpdateInput } from '../inputs/payment-update.input';

@ArgsType()
export class UpdateManyPaymentArgs {
  @Field(() => PaymentQueryInput, { nullable: true })
  query?: PaymentQueryInput;

  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

@ArgsType()
export class UpdateOnePaymentArgs {
  @Field(() => PaymentQueryInput, { nullable: false })
  query!: PaymentQueryInput;

  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

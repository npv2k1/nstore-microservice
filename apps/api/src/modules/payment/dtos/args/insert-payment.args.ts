import { ArgsType, Field } from '@nestjs/graphql';

import { PaymentInsertInput } from '../inputs/payment-insert.input';

@ArgsType()
export class InsertManyPaymentArgs {
  @Field(() => [PaymentInsertInput], { nullable: false })
  data!: PaymentInsertInput[];
}

@ArgsType()
export class InsertOnePaymentArgs {
  @Field(() => PaymentInsertInput, { nullable: false })
  data!: PaymentInsertInput;
}

import { ArgsType, Field } from '@nestjs/graphql';
import { PaymentInsertInput } from '../inputs/payment-insert.input';
import { PaymentQueryInput } from '../inputs/payment-query.input';

@ArgsType()
export class UpsertOnePaymentArgs {
  @Field(() => PaymentQueryInput, { nullable: true })
  query?: PaymentQueryInput;

  @Field(() => PaymentInsertInput, { nullable: false })
  data: PaymentInsertInput;
}

import { InputType, PartialType } from '@nestjs/graphql';

import { PaymentInsertInput } from './payment-insert.input';

@InputType()
export class PaymentUpdateInput extends PartialType(PaymentInsertInput) {}

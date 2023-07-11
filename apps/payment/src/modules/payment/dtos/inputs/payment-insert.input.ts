import { InputType } from '@nestjs/graphql';
import { PaymentInput } from './payment.input';

@InputType()
export class PaymentInsertInput extends PaymentInput {}

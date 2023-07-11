import { InputType, PartialType } from '@nestjs/graphql';
import { PaymentInput } from './payment.input';

@InputType()
export class PaymentQueryInput extends PartialType(PaymentInput) {}

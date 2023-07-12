import { InputType, PartialType } from '@nestjs/graphql';
import { OrderInput } from './order.input';

@InputType()
export class OrderQueryInput extends PartialType(OrderInput) {}

import { InputType, PartialType } from '@nestjs/graphql';
import { OrderInsertInput } from './order-insert.input';

@InputType()
export class OrderUpdateInput extends PartialType(OrderInsertInput) {}

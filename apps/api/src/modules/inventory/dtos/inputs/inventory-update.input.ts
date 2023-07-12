import { InputType, PartialType } from '@nestjs/graphql';
import { InventoryInsertInput } from './inventory-insert.input';

@InputType()
export class InventoryUpdateInput extends PartialType(InventoryInsertInput) {}

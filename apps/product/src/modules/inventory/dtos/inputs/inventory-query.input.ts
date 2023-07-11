import { Field, InputType, PartialType } from '@nestjs/graphql';
import { InventoryInput } from './inventory.input';
import { Filter } from 'mongodb';
import { Inventory } from '../../entities/inventory.entity';

@InputType()
export class InventoryQueryInput extends PartialType(InventoryInput) {
  @Field(() => [String], { nullable: true })
  categories_in?: string[];
}

export class ArrayQueryInput {}

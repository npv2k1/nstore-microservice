import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Filter } from 'mongodb';

import { Inventory } from '../../entities/inventory.entity';

import { InventoryInput } from './inventory.input';

@InputType()
export class InventoryQueryInput extends PartialType(InventoryInput) {
  @Field(() => [String], { nullable: true })
  categories_in?: string[];
}

export class ArrayQueryInput {}

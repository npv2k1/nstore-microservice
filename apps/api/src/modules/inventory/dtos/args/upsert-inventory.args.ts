import { ArgsType, Field } from '@nestjs/graphql';

import { InventoryInsertInput } from '../inputs/inventory-insert.input';
import { InventoryQueryInput } from '../inputs/inventory-query.input';

@ArgsType()
export class UpsertOneInventoryArgs {
  @Field(() => InventoryQueryInput, { nullable: true })
  query?: InventoryQueryInput;

  @Field(() => InventoryInsertInput, { nullable: false })
  data: InventoryInsertInput;
}

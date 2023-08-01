import { ArgsType, Field } from '@nestjs/graphql';

import { InventoryInsertInput } from '../inputs/inventory-insert.input';

@ArgsType()
export class InsertManyInventoryArgs {
  @Field(() => [InventoryInsertInput], { nullable: false })
  data!: InventoryInsertInput[];
}

@ArgsType()
export class InsertOneInventoryArgs {
  @Field(() => InventoryInsertInput, { nullable: false })
  data!: InventoryInsertInput;
}

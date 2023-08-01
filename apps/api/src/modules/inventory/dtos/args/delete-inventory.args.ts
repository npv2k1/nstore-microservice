import { ArgsType, Field } from '@nestjs/graphql';

import { InventoryQueryInput } from '../inputs/inventory-query.input';

@ArgsType()
export class DeleteManyInventoryArgs {
  @Field(() => InventoryQueryInput, { nullable: true })
  query?: InventoryQueryInput;
}
@ArgsType()
export class DeleteOneInventoryArgs {
  @Field(() => InventoryQueryInput, { nullable: false })
  query!: InventoryQueryInput;
}

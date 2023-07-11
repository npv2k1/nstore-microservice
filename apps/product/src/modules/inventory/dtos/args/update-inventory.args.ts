import { ArgsType, Field } from '@nestjs/graphql';
import { InventoryQueryInput } from '../inputs/inventory-query.input';
import { InventoryUpdateInput } from '../inputs/inventory-update.input';

@ArgsType()
export class UpdateManyInventoryArgs {
  @Field(() => InventoryQueryInput, { nullable: true })
  query?: InventoryQueryInput;

  @Field(() => InventoryUpdateInput, { nullable: false })
  data!: InventoryUpdateInput;
}

@ArgsType()
export class UpdateOneInventoryArgs {
  @Field(() => InventoryQueryInput, { nullable: false })
  query!: InventoryQueryInput;

  @Field(() => InventoryUpdateInput, { nullable: false })
  data!: InventoryUpdateInput;
}

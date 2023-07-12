import { ArgsType, Field } from '@nestjs/graphql';
import { InventoryQueryInput } from '../inputs/inventory-query.input';

@ArgsType()
export class FindManyInventoryArgs {
  @Field(() => InventoryQueryInput, { nullable: true })
  query?: InventoryQueryInput;
}

@ArgsType()
export class FindOneInventoryArgs {
  @Field(() => InventoryQueryInput, { nullable: false })
  query!: InventoryQueryInput;
}

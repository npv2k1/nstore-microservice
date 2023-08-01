import { ArgsType, Field } from '@nestjs/graphql';

import { ShipmentQueryInput } from '../inputs/shipment-query.input';
import { ShipmentUpdateInput } from '../inputs/shipment-update.input';

@ArgsType()
export class UpdateManyShipmentArgs {
  @Field(() => ShipmentQueryInput, { nullable: true })
  query?: ShipmentQueryInput;

  @Field(() => ShipmentUpdateInput, { nullable: false })
  data!: ShipmentUpdateInput;
}

@ArgsType()
export class UpdateOneShipmentArgs {
  @Field(() => ShipmentQueryInput, { nullable: false })
  query!: ShipmentQueryInput;

  @Field(() => ShipmentUpdateInput, { nullable: false })
  data!: ShipmentUpdateInput;
}

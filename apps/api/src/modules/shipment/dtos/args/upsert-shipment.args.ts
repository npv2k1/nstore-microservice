import { ArgsType, Field } from '@nestjs/graphql';

import { ShipmentInsertInput } from '../inputs/shipment-insert.input';
import { ShipmentQueryInput } from '../inputs/shipment-query.input';

@ArgsType()
export class UpsertOneShipmentArgs {
  @Field(() => ShipmentQueryInput, { nullable: true })
  query?: ShipmentQueryInput;

  @Field(() => ShipmentInsertInput, { nullable: false })
  data: ShipmentInsertInput;
}

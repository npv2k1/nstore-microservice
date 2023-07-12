import { ArgsType, Field } from '@nestjs/graphql';
import { ShipmentQueryInput } from '../inputs/shipment-query.input';

@ArgsType()
export class DeleteManyShipmentArgs {
  @Field(() => ShipmentQueryInput, { nullable: true })
  query?: ShipmentQueryInput;
}
@ArgsType()
export class DeleteOneShipmentArgs {
  @Field(() => ShipmentQueryInput, { nullable: false })
  query!: ShipmentQueryInput;
}

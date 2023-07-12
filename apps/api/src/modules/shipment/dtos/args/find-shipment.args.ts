import { ArgsType, Field } from '@nestjs/graphql';
import { ShipmentQueryInput } from '../inputs/shipment-query.input';

@ArgsType()
export class FindManyShipmentArgs {
  @Field(() => ShipmentQueryInput, { nullable: true })
  query?: ShipmentQueryInput;
}

@ArgsType()
export class FindOneShipmentArgs {
  @Field(() => ShipmentQueryInput, { nullable: false })
  query!: ShipmentQueryInput;
}

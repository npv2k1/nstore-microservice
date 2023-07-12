import { ArgsType, Field } from '@nestjs/graphql';
import { ShipmentInsertInput } from '../inputs/shipment-insert.input';

@ArgsType()
export class InsertManyShipmentArgs {
  @Field(() => [ShipmentInsertInput], { nullable: false })
  data!: ShipmentInsertInput[];
}

@ArgsType()
export class InsertOneShipmentArgs {
  @Field(() => ShipmentInsertInput, { nullable: false })
  data!: ShipmentInsertInput;
}

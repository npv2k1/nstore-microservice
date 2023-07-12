import { InputType, PartialType } from '@nestjs/graphql';
import { ShipmentInsertInput } from './shipment-insert.input';

@InputType()
export class ShipmentUpdateInput extends PartialType(ShipmentInsertInput) {}

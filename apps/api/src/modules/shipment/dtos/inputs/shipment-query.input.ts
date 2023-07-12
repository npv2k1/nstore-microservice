import { InputType, PartialType } from '@nestjs/graphql';
import { ShipmentInput } from './shipment.input';

@InputType()
export class ShipmentQueryInput extends PartialType(ShipmentInput) {}

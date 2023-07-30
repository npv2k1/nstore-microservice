import { InputType } from '@nestjs/graphql';

import { ShipmentInput } from './shipment.input';

@InputType()
export class ShipmentInsertInput extends ShipmentInput {}

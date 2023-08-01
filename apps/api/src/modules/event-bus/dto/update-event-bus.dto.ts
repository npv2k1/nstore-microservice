import { PartialType } from '@nestjs/mapped-types';

import { CreateEventBusDto } from './create-event-bus.dto';

export class UpdateEventBusDto extends PartialType(CreateEventBusDto) {
  id: number;
}

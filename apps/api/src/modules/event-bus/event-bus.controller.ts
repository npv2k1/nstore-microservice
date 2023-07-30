import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

import { EventBusName } from '@/common/enums/event.enum';

import { CreateEventBusDto } from './dto/create-event-bus.dto';
import { UpdateEventBusDto } from './dto/update-event-bus.dto';
import { EventBusService } from './event-bus.service';

@Controller()
export class EventBusController {
  constructor(private readonly eventBusService: EventBusService) {}
}

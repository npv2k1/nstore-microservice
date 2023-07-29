import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { EventBusService } from './event-bus.service';
import { CreateEventBusDto } from './dto/create-event-bus.dto';
import { UpdateEventBusDto } from './dto/update-event-bus.dto';
import { EventBusName } from '@/common/enums/event.enum';

@Controller()
export class EventBusController {
  constructor(private readonly eventBusService: EventBusService) {}

 
}

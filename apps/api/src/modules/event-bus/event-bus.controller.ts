import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EventBusService } from './event-bus.service';
import { CreateEventBusDto } from './dto/create-event-bus.dto';
import { UpdateEventBusDto } from './dto/update-event-bus.dto';

@Controller()
export class EventBusController {
  constructor(private readonly eventBusService: EventBusService) {}


}

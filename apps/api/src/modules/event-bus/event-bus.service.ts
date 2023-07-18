import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EventBusService {
  constructor(
    @Inject('EVENT_BUS_SERVICE')
    private readonly eventBusClient: ClientProxy
  ) {}

  getClient() {
    return this.eventBusClient;
  }

  emit(pattern: string, data: any) {
    return this.eventBusClient.emit(pattern, data);
  }


}

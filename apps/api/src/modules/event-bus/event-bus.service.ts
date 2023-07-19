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

  async send(pattern: string, data: any): Promise<any> {
    return await new Promise((resolve, reject) => {
      try {
        this.eventBusClient.send(pattern, data).subscribe({
          next: (result) => {
            resolve(result);
          },
          error: (err) => {
            console.log(err);
            reject(err);
          },
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

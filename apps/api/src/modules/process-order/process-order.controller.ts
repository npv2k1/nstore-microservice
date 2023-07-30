import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

import { ProcessOrderService } from './process-order.service';
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
@Controller()
export class ProcessOrderController {
  constructor(private readonly processOrderService: ProcessOrderService) {}

  @MessagePattern('ping')
  async ping(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    console.log(`Pattern: ${context.getPattern()}`, data);
    // await sleep(10000);
    await this.processOrderService.orderSuccess();
    channel.ack(originalMsg);
    console.log(`DONE: ${context.getPattern()}`, data);

    return 'pong';
  }
}

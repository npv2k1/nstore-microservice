import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
@Controller('inventory')
export class InventoryController {
  @MessagePattern('ping')
  async ping2(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    // console.log('channel', channel);

    await sleep(3000);
    console.log('Done ping2');
    channel.ack(originalMsg);

    return 'pong-2';
  }
}

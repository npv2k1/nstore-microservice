import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  @MessagePattern('OrderSuccess')
  async ping(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    console.log(`Pattern: ${context.getPattern()}`, data); 

    return 'pong';
  }
}

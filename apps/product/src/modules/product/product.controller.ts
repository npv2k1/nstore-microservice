import { Controller, Get, Inject, Post } from '@nestjs/common';
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
@Controller('product')
export class ProductController {
  constructor(
    @Inject('PRODUCT_SERVICE')
    private readonly productService: ClientProxy,
    @Inject('EVENT_BUS_SERVICE')
    private readonly eventBusService: ClientProxy
  ) {}
  @MessagePattern('ping')
  async ping(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    // console.log('channel', channel);
    console.log(`Pattern: ${context.getPattern()}`, data);
    await sleep(3000);
    console.log('Done');
    channel.ack(originalMsg);

    return 'pong-1';
  }



  @Get()
  async get() {
    return 'hello';
  }
  @Post('product')
  async postEventProduct() {
    await this.productService.send('ping', 'postevnt').subscribe((res) => {
      console.log('productService', res);
    });
    return '';
  }
  @Post('even_bus')
  async postEventBus() {
    await this.eventBusService.send('ping', 'postevnt').subscribe((res) => {
      console.log('eventBusService', res);
    });
    return '';
  }
}

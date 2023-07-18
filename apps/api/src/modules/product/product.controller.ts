import { Controller, Get, Inject, Post } from '@nestjs/common';
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) {}
  @MessagePattern('OrderCreated')
  async ping(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    // console.log('channel', channel);
    console.log(`Pattern: ${context.getPattern()}`, data);
    
    // TODO: reduce product quantity

    // await this.productService.reduceProductQuantity(data.productId, data.quantity);


    return 'pong-1';
  }
}

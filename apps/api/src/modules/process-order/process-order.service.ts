import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProcessOrderService {
  constructor(
    @Inject('PRODUCT_SERVICE')
    private readonly productService: ClientProxy
  ) {}

  async orderSuccess() {
    this.productService.emit('OrderSuccess', 'order_success');
  }
}

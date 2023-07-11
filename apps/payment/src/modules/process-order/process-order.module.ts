import { Module } from '@nestjs/common';
import { ProcessOrderService } from './process-order.service';
import { ProcessOrderController } from './process-order.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ProcessOrderController],
  providers: [ProcessOrderService],
})
export class ProcessOrderModule {}

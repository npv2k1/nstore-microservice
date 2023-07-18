import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './entities/order.entity';
import { OrderRepository } from './order.repository';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport, createGrpcMethodMetadata } from '@nestjs/microservices';
import { CartModule } from '../cart/cart.module';
import { CustomerModule } from '../customer/customer.module';
import { QUEUE_NAME } from '@/common/enums/queue-name.enum';
import { EventBusModule } from '../event-bus/event-bus.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    CartModule,
    CustomerModule,
    EventBusModule,
  ],
  providers: [OrderResolver, OrderService, OrderRepository],
})
export class OrderModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CartModule } from '../cart/cart.module';
import { CustomerModule } from '../customer/customer.module';
import { EventBusModule } from '../event-bus/event-bus.module';

import { Order, OrderSchema } from './entities/order.entity';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    CartModule,
    CustomerModule,
    EventBusModule,
  ],
  providers: [OrderResolver, OrderService, OrderRepository],
  controllers: [OrderController],
})
export class OrderModule {}

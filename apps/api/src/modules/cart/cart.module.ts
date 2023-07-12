import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './entities/cart.entity';
import { CartRepository } from './cart.repository';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }])],
  providers: [
    CartResolver,
    CartService,
    CartRepository,
    {
      provide: 'CART_PROCESS_SERVICE',
      useFactory: (configService: ConfigService) => {
        const MQ_HOST = configService.get('MQ_HOST');
        const MQ_PORT = configService.get('MQ_PORT');
        const MQ_USER = configService.get('MQ_USER');
        const MQ_PASS = configService.get('MQ_PASS');
        const MQ_QUEUE = configService.get('MQ_QUEUE');
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${MQ_USER}:${MQ_PASS}@${MQ_HOST}:${MQ_PORT}`],
            queue: MQ_QUEUE,
            noAck: false,
            queueOptions: {
              durable: false,
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class CartModule {}

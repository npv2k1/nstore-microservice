import { Module } from '@nestjs/common';
import { ProcessOrderService } from './process-order.service';
import { ProcessOrderController } from './process-order.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ProcessOrderController],
  providers: [
    ProcessOrderService,
    {
      provide: 'PRODUCT_SERVICE',
      useFactory: (configService: ConfigService) => {
        const MQ_HOST = configService.get('MQ_HOST');
        const MQ_PORT = configService.get('MQ_PORT');
        const MQ_USER = configService.get('MQ_USER');
        const MQ_PASS = configService.get('MQ_PASS');
        const MQ_QUEUE = configService.get('MQ_QUEUE_PRODUCT');
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
export class ProcessOrderModule {}

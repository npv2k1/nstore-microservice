import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { QUEUE_NAME } from '@/common/enums/queue-name.enum';

import { EventBusController } from './event-bus.controller';
import { EventBusService } from './event-bus.service';

@Module({
  controllers: [EventBusController],
  providers: [
    EventBusService,
    {
      provide: 'EVENT_BUS_SERVICE',
      useFactory: (configService: ConfigService) => {
        const MQ_HOST = configService.get('MQ_HOST');
        const MQ_PORT = configService.get('MQ_PORT');
        const MQ_USER = configService.get('MQ_USER');
        const MQ_PASS = configService.get('MQ_PASS');
        const MQ_QUEUE = configService.get('MQ_QUEUE');
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get('AMQP_URL')],
            queue: QUEUE_NAME.EVENT_BUS,
            // noAck: false,
            queueOptions: {
              durable: false,
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [EventBusService],
})
export class EventBusModule {}

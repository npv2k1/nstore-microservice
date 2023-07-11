import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './entities/payment.entity';
import { PaymentRepository } from './payment.repository';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
  providers: [
    PaymentResolver,
    PaymentService,
    PaymentRepository,
    {
      provide: 'ORDER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const MQ_HOST = configService.get('MQ_HOST');
        const MQ_PORT = configService.get('MQ_PORT');
        const MQ_USER = configService.get('MQ_USER');
        const MQ_PASS = configService.get('MQ_PASS');
        const MQ_QUEUE = configService.get('MQ_QUEUE_ORDER');
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
export class PaymentModule {}

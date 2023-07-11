import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'MAIL_SERVICE',
      useFactory: (configService: ConfigService) => {
        const MQ_HOST = configService.get('MQ_HOST');
        const MQ_PORT = configService.get('MQ_PORT');
        const MQ_USER = configService.get('MQ_USER');
        const MQ_PASS = configService.get('MQ_PASS');
        const MQ_QUEUE = configService.get('MQ_QUEUE_MAIL');

        console.log('RabbitMQ Config: ', MQ_HOST, MQ_PORT, MQ_USER, MQ_PASS, MQ_QUEUE, '');

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
    MailService,
  ],
  exports: [MailService],
})
export class MailModule {}

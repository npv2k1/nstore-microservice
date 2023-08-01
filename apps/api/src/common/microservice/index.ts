import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { QUEUE_NAME } from '../enums/queue-name.enum';

export const setupMicroservice = async (app: INestApplication) => {
  // Load config
  const configService = app.get(ConfigService);
  const MQ_HOST = configService.get('MQ_HOST');
  const MQ_PORT = configService.get('MQ_PORT');
  const MQ_USER = configService.get('MQ_USER');
  const MQ_PASS = configService.get('MQ_PASS');
  const MQ_QUEUE = configService.get('MQ_QUEUE');

  console.log('RabbitMQ Config: ', {
    MQ_HOST,
    MQ_PORT,
    MQ_USER,
    MQ_PASS,
    MQ_QUEUE,
  });

  // Start microservice for mail
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${MQ_USER}:${MQ_PASS}@${MQ_HOST}:${MQ_PORT}`],
      queue: QUEUE_NAME.MAIL,
      noAck: false,
      prefetchCount: 1, // Process one by one
      queueOptions: {
        durable: false,
      },
    },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${MQ_USER}:${MQ_PASS}@${MQ_HOST}:${MQ_PORT}`],
      queue: QUEUE_NAME.EVENT_BUS,
      //  noAck: false,
      //  prefetchCount: 1, // Process one by one
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices().then(() => console.log('Microservice is listening'));
};

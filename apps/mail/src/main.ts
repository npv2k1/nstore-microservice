import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Config, NestConfig, RabbitmqConfig } from '@/common/configs';
import { setupSwagger } from './common/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;

  setupSwagger(app);

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

  // Start microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${MQ_USER}:${MQ_PASS}@${MQ_HOST}:${MQ_PORT}`],
      queue: MQ_QUEUE,
      noAck: false,
      prefetchCount:1, // Process one by one
      queueOptions: {
        durable: false,
      },
    },
  });
  
  await app
    .startAllMicroservices()
    .then(() => console.log('Microservice is listening'));

  // Start application
  await app
    .listen(PORT)
    .then(() => console.log('Application is listening on port ' + PORT));
}
bootstrap();

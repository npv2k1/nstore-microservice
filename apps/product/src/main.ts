import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import type {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from 'src/common/configs/config.interface';
import { json, urlencoded } from 'express';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ extended: true, limit: '100mb' }));
  // Validation
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  // Swagger Api
  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .addBearerAuth()
      .setTitle(swaggerConfig.title || 'Nestjs')
      .setDescription(swaggerConfig.description || 'The nestjs API description')
      .setVersion(swaggerConfig.version || '1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
  }

  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  // Load config
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
      // prefetchCount: 1, // Process one by one
      queueOptions: {
        durable: false,
      },
    },
  });


  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${MQ_USER}:${MQ_PASS}@${MQ_HOST}:${MQ_PORT}`],
      queue: "even_bus",
      noAck: false,
      prefetchCount: 1, // Process one by one
      queueOptions: {
        durable: false,
      },
    },
  });

  await app
    .startAllMicroservices()
    .then(() => console.log('Microservice is listening'));

  await app.listen(process.env.PORT || nestConfig.port || 3000).then(() => {
    console.log(
      `Server is running on http://localhost:${
        process.env.PORT || nestConfig.port || 3000
      }`
    );
  });
}
bootstrap();

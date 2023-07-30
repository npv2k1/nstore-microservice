import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

import type { NestConfig } from 'src/common/configs/config.interface';

import { HttpExceptionFilter } from './common/filters/HttpExceptions.filter';
import { setupMicroservice } from './common/microservice';
import { setupPrisma } from './common/prisma/prisma';
import { setupSocket } from './common/socket/socket';
import { setupSwagger } from './common/swagger/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.setGlobalPrefix('/api');
  app.enableCors();
  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ extended: true, limit: '100mb' }));

  // Validation and transform
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  // Prisma Client Exception Filter for unhandled exceptions
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter(httpAdapter));

  await setupPrisma(app);
  await setupSwagger(app);
  await setupSocket(app);
  await setupMicroservice(app);

  // Listen port
  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const port = process.env.PORT || nestConfig.port || 3000;
  await app
    .listen(port)
    .then(() => {
      console.log(`http://localhost:${port}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

bootstrap();

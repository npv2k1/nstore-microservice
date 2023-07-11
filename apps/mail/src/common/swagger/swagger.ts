import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  OpenAPIObject,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export const swaggerPath = 'api';

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle('@nstack/api')
  .setDescription('\n\n API Documents')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: './swagger/swagger.css',
  customfavIcon: './swagger/favicon.png',
  customSiteTitle: '@nstack/api',
};

/**
 * It loops through all the paths and methods in the swagger document, and if the method has the
 * security decorator 'isPublic', it removes the security decorator from the method
 * @param {INestApplication} app - INestApplication - the NestJS application instance
 */
export async function setupSwagger(app: INestApplication) {
  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);
  /** check if there is Public decorator for each path (action) and its method (findMany / findOne) on each controller */
  Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
    Object.values(path).forEach((method: any) => {
      if (
        Array.isArray(method.security) &&
        method.security.includes('isPublic')
      ) {
        method.security = [];
      }
    });
  });
  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);
  console.log('Swagger setup success');
}

import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Nestjs FTW',
    description: 'The nestjs API description',
    version: '1.5',
    path: 'api',
  },
  security: {
    expiresIn: '7d',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
  graphql: {
    schemaDestination: './src/schema.graphql',
    debug: true,
    playgroundEnabled: true,
    sortSchema: true,
  },
  s3Storage: {
    endpoint: process.env.S3_ENDPOINT || '',
    accessKeyId: process.env.S3_ACCESS_KEY || '',
    secretAccessKey: process.env.S3_SECRET_KEY || '',
    // bucket: 'nestjs',
    region: process.env.S3_REGION || 'auto',
  },
};

export default (): Config => config;

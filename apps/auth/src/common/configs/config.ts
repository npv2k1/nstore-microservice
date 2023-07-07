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
    endpoint: 'http://127.0.0.1:9000',
    accessKeyId: 'cDQeMNHRdmd1lrP5',
    secretAccessKey: 'i4QzmYWm4IE59HYotWmO4LNAVxI5WbbA',
    // bucket: 'nestjs',
    region: 'auto',
  },
};

export default (): Config => config;

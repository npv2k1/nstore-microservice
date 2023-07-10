import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';

// const options = {
//   host: 'localhost',
//   port: 6379,
//   retryStrategy: (times) => {
//     // reconnect after
//     return Math.min(times * 50, 2000);
//   },
// };

// export const pubSub = new RedisPubSub({
//   publisher: new Redis(options),
//   subscriber: new Redis(options),
// });
export const pubSub = new PubSub();

@Module({
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
  exports: ['PUB_SUB'],
})
export class PubSubModule {}

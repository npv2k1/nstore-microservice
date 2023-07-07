import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PubSub, PubSubEngine } from 'graphql-subscriptions';
import { Redis } from 'ioredis';
import { SubEventName, SubEventNameType } from './sub-event-name';

@Injectable()
export class PubSubService {
  pubSub: PubSubEngine;
  constructor(private readonly configService: ConfigService) {
    const pubSubDriver = this.configService.get<string>('PUBSUB_DRIVER');
    console.log('Setup pubsub driver: ', pubSubDriver);
    switch (pubSubDriver) {
      case 'redis':
        const options = {
          host: this.configService.get<string>('REDIS_HOST'),
          port: this.configService.get<number>('REDIS_PORT'),
          retryStrategy: (times) => {
            return Math.min(times * 50, 2000);
          },
        };
        this.pubSub = new RedisPubSub({
          publisher: new Redis(options),
          subscriber: new Redis(options),
        });
      default:
        this.pubSub = new PubSub();
    }
  }

  /**
   * This function publishes a payload to a specific trigger name using the pubSub object.
   * @param {SubEventNameType} triggerName - SubEventNameType, which is a custom type defined elsewhere
   * in the codebase. It likely represents the name of a specific event that is being triggered.
   * @param {any} payload - The payload parameter is the data that will be sent along with the event
   * trigger. It can be any type of data The payload is what
   * @returns
   */
  async publish(triggerName: SubEventNameType, payload: any) {
    return await this.pubSub.publish(SubEventName[triggerName], {
      [SubEventName[triggerName]]: payload,
    });
  }

  /**
   * This function returns an async iterator for a given trigger name using the pubSub object.
   * @param {SubEventNameType} triggerName - SubEventNameType, which is a custom type defined elsewhere
   * in the codebase. It likely represents the name of a specific event or trigger that the asyncIterator
   * should listen for.
   * @returns An async iterator is being returned. The async iterator is created using the
   * `asyncIterator` method of the `pubSub` object, passing in the corresponding event name based on the
   * `triggerName` parameter.
   */
  asyncIterator(triggerName: SubEventNameType) {
    return this.pubSub.asyncIterator(SubEventName[triggerName]);
  }
}

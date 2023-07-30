import { INestApplication } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';
import { ServerOptions } from 'socket.io';

export class SocketAdapter extends IoAdapter {
  createIOServer(
    port: number,
    options?: ServerOptions & {
      namespace?: string;
      server?: any;
    }
  ) {
    const server = super.createIOServer(port, { ...options, cors: true });
    return server;
  }
}

export class RedisIoAdapter extends IoAdapter {
  private adapterConstructor: ReturnType<typeof createAdapter>;

  async connectToRedis(): Promise<void> {
    const pubClient = createClient({ url: `redis://localhost:6379` });
    const subClient = pubClient.duplicate();

    await Promise.all([pubClient.connect(), subClient.connect()]);

    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(this.adapterConstructor);
    return server;
  }
}

/**
 * It sets up socket.io with a redis adapter if the redis connection is successful, otherwise it sets
 * up socket.io with a default adapter
 * @param {INestApplication} app - INestApplication - the NestJS application instance
 */
export const setupSocket = async (app: INestApplication) => {
  try {
    const redisIoAdapter = new RedisIoAdapter(app);
    await redisIoAdapter.connectToRedis();
    app.useWebSocketAdapter(redisIoAdapter);
    console.log('Setup socket.io with redis adapter success');
  } catch (e) {
    app.useWebSocketAdapter(new SocketAdapter(app));
    console.log('Setup socket.io adapter success');
  }
};

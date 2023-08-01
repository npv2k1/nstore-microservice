import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BullModule } from '@nestjs/bull';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthService } from '@modules/auth/auth.service';
import { join } from 'path';

import { loggingMiddleware } from '@/common/prisma/middleware/logging';
import config from 'src/common/configs/config';
import { PrismaModule } from 'src/common/prisma/prisma';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from 'src/modules/user/users.module';

import { GqlConfigService } from './common/graphql/gql-config.service';
import { excludePasswordMiddleware } from './common/prisma/middleware';
import { CartModule } from './modules/cart/cart.module';
import { CategoryModule } from './modules/category/category.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { CrontaskModule } from './modules/crontask/crontask.module';
import { CustomerModule } from './modules/customer/customer.module';
import { EventBusModule } from './modules/event-bus/event-bus.module';
import { FlashSaleModule } from './modules/flashsale/flashsale.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { OrderModule } from './modules/order/order.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ProductModule } from './modules/product/product.module';
import { RoleModule } from './modules/role/role.module';
import { ShipmentModule } from './modules/shipment/shipment.module';
import { StorageModule } from './modules/storage/storage.module';
import { customPrismaMiddleware } from './utils/prisma.util';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [AuthModule],
      useClass: GqlConfigService,
      driver: ApolloDriver,
      inject: [ConfigService, AuthService],
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      autoIndex: true,
      useNewUrlParser: true,
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        // prismaOptions: {
        //   log: ['query', 'info', 'warn'],
        // },
        middlewares: [
          loggingMiddleware(new Logger('PrismaMiddleware')),
          customPrismaMiddleware(),
          excludePasswordMiddleware(),
        ], // configure your prisma middleware
      },
    }),

    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379,
        username: process.env.REDIS_USERNAME || '',
        password: process.env.REDIS_PASSWORD || '',
      },
    }),
    AuthModule,
    UsersModule,
    RoleModule,
    CustomerModule,
    InventoryModule,
    CategoryModule,
    ProductModule,
    CartModule,
    OrderModule,
    PaymentModule,
    ShipmentModule,
    CouponModule,
    FlashSaleModule,
    EventBusModule,
    StorageModule,
    CrontaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

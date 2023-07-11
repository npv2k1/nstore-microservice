import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'src/common/configs/config';
import { GqlConfigService } from './common/graphql/gql-config.service';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProcessOrderModule } from './modules/process-order/process-order.module';
import { PaymentModule } from './modules/payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      autoIndex: true,
      useNewUrlParser: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    AuthModule,
    UserModule,
    PaymentModule,
    ProcessOrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

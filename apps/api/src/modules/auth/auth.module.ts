import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { SecurityConfig } from 'src/common/configs/config.interface';
import { PubSubModule } from 'src/common/graphql/pubsub.module';
import { GqlAuthGuard } from 'src/common/guards';
import { WsGuard } from 'src/common/guards/ws/ws.guard';

import { CustomerModule } from '../customer/customer.module';
import { MailModule } from '../mail/mail.module';
import { UsersModule } from '../user/users.module';

import { GoogleStrategy } from './strategy/google.strategy';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PasswordService } from './password.service';

@Global()
@Module({
  imports: [
    PubSubModule,
    UsersModule,
    MailModule,
    CustomerModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_ACCESS_SECRET'),
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    PasswordService,
    WsGuard,
    GoogleStrategy,
    AuthResolver,
    GqlAuthGuard,
  ],
  exports: [AuthService, WsGuard],
  controllers: [AuthController],
})
export class AuthModule {}

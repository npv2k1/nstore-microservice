import { Module } from '@nestjs/common';
import { MailModule } from './modules/mail/mail.module';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { MailServiceModule } from './shared/mail-service/mail-service.module';
import config from '@/common/configs';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    MailModule,
    HealthModule,
    MailServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

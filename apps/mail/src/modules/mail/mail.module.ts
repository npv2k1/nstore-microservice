import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const SMTP_HOST = configService.get('SMTP_HOST');
        const SMTP_PORT = configService.get('SMTP_PORT');
        const SMTP_USER = configService.get('SMTP_USER');
        const SMTP_PASS = configService.get('SMTP_PASS');
        const SMTP_FROM = configService.get('SMTP_FROM');

        const config = {
          transport: {
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: false, // upgrade later with STARTTLS
            auth: {
              user: SMTP_USER,
              pass: SMTP_PASS,
            },
          },
          defaults: {
            from: '"No Reply" <hi@2k1.me>',
          },
          template: {
            dir: join('templates'),
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
        };
        console.log('🚀 ~ file: mail.module.ts:50 ~ config:', config);

        return config;
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
  controllers: [MailController],
})
export class MailModule {}

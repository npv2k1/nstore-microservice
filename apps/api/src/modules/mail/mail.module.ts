import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailController } from './mail.controller';
import { QUEUE_NAME } from '@/common/enums/queue-name.enum';

@Global()
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
  controllers: [MailController],
  providers: [
    {
      provide: 'MAIL_SERVICE',
      useFactory: (configService: ConfigService) => {
        const MQ_HOST = configService.get('MQ_HOST');
        const MQ_PORT = configService.get('MQ_PORT');
        const MQ_USER = configService.get('MQ_USER');
        const MQ_PASS = configService.get('MQ_PASS');
        // const MQ_QUEUE = configService.get('MQ_QUEUE_MAIL');

        // console.log('RabbitMQ Config: ', MQ_HOST, MQ_PORT, MQ_USER, MQ_PASS, MQ_QUEUE, '');

        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${MQ_USER}:${MQ_PASS}@${MQ_HOST}:${MQ_PORT}`],
            queue: QUEUE_NAME.MAIL,
            noAck: false,
            queueOptions: {
              durable: false,
            },
          },
        });
      },
      inject: [ConfigService],
    },
    MailService,
  ],
  exports: [MailService],
})
export class MailModule {}

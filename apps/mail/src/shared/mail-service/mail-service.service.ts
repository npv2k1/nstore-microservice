import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendMailDto } from './dtos/send-mail.dto';

@Injectable()
export class MailServiceService implements OnModuleInit {
  constructor(
    @Inject('MAIL_SERVICE')
    private readonly mailService: ClientProxy,
  ) {}
  async onModuleInit() {
    try {
      await this.mailService.connect();
    } catch (error) {
      console.error(error);
    }
  }

  async send(data: SendMailDto) {
    return await new Promise((resolve, reject) => {
      try {
        this.mailService.send('send', data).subscribe({
          next: (result) => {
            console.log(
              '🚀 ~ file: mail-service.service.ts:34 ~ MailServiceService ~ .subscribe ~ result:',
              result,
            );
            resolve(result);
          },
          error: (err) => {
            console.log(err);
          },
        });
      } catch (error) {
        console.log(error);
      }
      resolve('done');
    });
  }

  async ping() {
    // return new Promise((resolve, reject) => {
    //   this.mailService
    //     .send('ping', 'ping')

    //     .subscribe((result) => {
    //       resolve(result);
    //     });
    // });

    return await new Promise((resolve, reject) => {
      try {
        this.mailService.send('ping', 'ping').subscribe({
          next: (result) => {
            console.log(
              '🚀 ~ file: mail-service.service.ts:34 ~ MailServiceService ~ .subscribe ~ result:',
              result,
            );
            resolve(result);
          },
          error: (err) => {
            console.log(err);
          },
        });
      } catch (error) {
        console.log(error);
        //  reject(error);
      }
      resolve('done');
    });

    this.mailService
      .send('ping', 'ping')

      .subscribe((result) => {
        console.log(
          '🚀 ~ file: mail-service.service.ts:34 ~ MailServiceService ~ .subscribe ~ result:',
          result,
        );

        return result;
      });

    return 'acsadc';
  }
}

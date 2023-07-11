import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendMailDto } from './dtos/send-mail.dto';

@Injectable()
export class MailService implements OnModuleInit {
  constructor(
    @Inject('MAIL_SERVICE')
    private readonly mailService: ClientProxy
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
}

import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendMailDto } from './dtos/send-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService implements OnModuleInit {
  constructor(
    @Inject('MAIL_SERVICE')
    private readonly mailService: ClientProxy,
    private mailerService: MailerService
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

  /**
   * This is an asynchronous function that sends an email using data provided in a SendMailDto object.
   * @param {SendMailDto} data - SendMailDto object containing the email details such as recipient email
   * address, subject, and email body in HTML format.
   * @returns The `sendMail` method is returning a Promise that resolves to the result of the `sendMail`
   * method of the `mailerService`.
   */
  async sendMail(data: SendMailDto) {
    return await this.mailerService.sendMail({
      to: data.to,
      // from: '"Support Team" <hi@2k1.me>', // override default from
      subject: data.subject,
      html: data.html,
    });
  }
}

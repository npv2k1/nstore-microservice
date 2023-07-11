import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dtos/send-mail.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

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

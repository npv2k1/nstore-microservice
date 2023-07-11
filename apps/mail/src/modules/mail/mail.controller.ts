import { Body, Controller, Post } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices/ctx-host';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices/decorators';
import { ApiTags } from '@nestjs/swagger';
import { MailService } from './mail.service';
import { SendMailDto } from './dtos/send-mail.dto';

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
@ApiTags('Mail')
@Controller('mail')
export class MailController {
  constructor(protected readonly mailService: MailService) {}

  @Post('send')
  async sendMail(@Body() data: SendMailDto) {
    return await this.mailService.sendMail(data);
  }

  @MessagePattern('ping')
  async ping(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    console.log(`Pattern: ${context.getPattern()}`, data);
    await sleep(10000);
    channel.ack(originalMsg);
    console.log(`DONE: ${context.getPattern()}`, data);

    return 'pong';
  }

  @MessagePattern('send')
  async send(@Payload() data: SendMailDto, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    // console.log(`Pattern: ${context.getPattern()}`, data);
    const sendRes = await this.mailService.sendMail(data);
    console.log('SEND_MAIL_RESPONSE', {
      data,
      sendRes,
    });

    // Make message ack
    channel.ack(originalMsg);
    return 'pong';
  }
}

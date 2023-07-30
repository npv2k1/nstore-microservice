import { Body, Controller, Post } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices/ctx-host';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices/decorators';
import { ApiTags } from '@nestjs/swagger';

import { EventBusName } from '@/common/enums/event.enum';

import { CustomerService } from '../customer/customer.service';

import { SendMailDto } from './dtos/send-mail.dto';
import { MailService } from './mail.service';

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
@ApiTags('Mail')
@Controller('mail')
export class MailController {
  constructor(
    protected readonly mailService: MailService,
    private customerService: CustomerService
  ) {}

  @Post('send')
  async sendMail(@Body() data: SendMailDto) {
    return await this.mailService.sendMail(data);
  }

  @MessagePattern(EventBusName.FLASHSALE_SCHEDULE)
  async handleFlashSale(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    if (data) {
      console.log(`Pattern: ${context.getPattern()}`, data);
      const customer = await this.customerService.findAll();
      customer.forEach((element) => {
        this.mailService.send({
          to: element.email,
          subject: 'Flash sale',
          html: `Flash sale ${JSON.stringify(data)}`,
        });
      });
    }

    return 'pong';
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

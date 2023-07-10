import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailServiceService } from './mail-service.service';
import { ApiTags } from '@nestjs/swagger';
import { SendMailDto } from './dtos/send-mail.dto';

@ApiTags('MailService')
@Controller('mail-service')
export class MailServiceController {
  constructor(private readonly mailServiceService: MailServiceService) {}

  @Get('ping')
  async ping() {
    return await this.mailServiceService.ping();
  }

  @Post('send')
  async send(@Body() body: SendMailDto) {
    return await this.mailServiceService.send(body);
  }
}

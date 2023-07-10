import { ApiProperty } from '@nestjs/swagger';

export class SendMailDto {
  @ApiProperty({
    type: 'string',
    default: 'example@example.com',
  })
  to: string;

  @ApiProperty({
    type: 'string',
    default: '',
  })
  subject: string;

  @ApiProperty({
    type: 'string',
    default: '',
  })
  html: string;
}

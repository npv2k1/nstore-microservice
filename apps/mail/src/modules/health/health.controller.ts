import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  health() {
    return {
      status: 'up',
    };
  }
}

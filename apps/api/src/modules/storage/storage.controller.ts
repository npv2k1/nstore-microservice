import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StorageService } from './storage.service';

@ApiTags('Storage')
@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Get('upload-url')
  async getUploadUrl(@Query('extension') extension: string) {
    const response = await this.storageService.getUploadUrl(extension);
    return response;
  }

  @Get('list')
  async listFiles() {
    return await this.storageService.listFiles();
  }

  @Get('file')
  async getFile(@Query('name') name: string) {
    return await this.storageService.getViewUrl(name);
  }
}

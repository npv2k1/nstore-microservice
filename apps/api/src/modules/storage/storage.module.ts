import { Module } from '@nestjs/common';

import { StorageController } from './storage.controller';
import { StorageResolver } from './storage.resolver';
import { StorageService } from './storage.service';

@Module({
  providers: [StorageResolver, StorageService],
  controllers: [StorageController],
})
export class StorageModule {}

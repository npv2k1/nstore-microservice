import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageResolver } from './storage.resolver';
import { StorageController } from './storage.controller';

@Module({
  providers: [StorageResolver, StorageService],
  controllers: [StorageController],
})
export class StorageModule {}

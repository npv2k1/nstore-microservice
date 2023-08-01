import { Module } from '@nestjs/common';

import { EventBusModule } from '../event-bus/event-bus.module';
import { FlashSaleModule } from '../flashsale/flashsale.module';

import { CrontaskController } from './crontask.controller';
import { CrontaskService } from './crontask.service';

@Module({
  imports: [FlashSaleModule, EventBusModule],
  controllers: [CrontaskController],
  providers: [CrontaskService],
})
export class CrontaskModule {}

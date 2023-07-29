import { Module } from '@nestjs/common';
import { CrontaskService } from './crontask.service';
import { CrontaskController } from './crontask.controller';
import { FlashSaleModule } from '../flashsale/flashsale.module';
import { EventBusModule } from '../event-bus/event-bus.module';

@Module({
  imports: [FlashSaleModule, EventBusModule],
  controllers: [CrontaskController],
  providers: [CrontaskService]
})
export class CrontaskModule {}

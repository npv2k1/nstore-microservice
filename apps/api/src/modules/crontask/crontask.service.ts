import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { CronJob, CronTime } from 'cron';

import { EventBusName } from '@/common/enums/event.enum';

import { EventBusService } from '../event-bus/event-bus.service';
import { FlashSaleService } from '../flashsale/flashsale.service';

@Injectable()
export class CrontaskService {
  private readonly logger = new Logger(CrontaskService.name);
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private flashsaleService: FlashSaleService,
    private eventBusService: EventBusService
  ) {}
  @Cron(CronExpression.EVERY_10_MINUTES, {
    name: 'FlashSale',
  })
  async handleCron() {
    const flashsale = await this.flashsaleService.findAllFlashSaleSchedule();
    console.log(flashsale);
    if (flashsale.length === 0) return;
    // Send event to event bus
    this.eventBusService.emit(EventBusName.FLASHSALE_SCHEDULE, flashsale);
    // Update status
    await Promise.all(
      flashsale.map((item) =>
        this.flashsaleService.updateOne({ query: { _id: item._id }, data: { isNotify: true } })
      )
    );
  }
}

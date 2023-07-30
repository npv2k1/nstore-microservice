import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { CronJob, CronTime } from 'cron';
import { FlashSaleService } from '../flashsale/flashsale.service';
import { EventBusService } from '../event-bus/event-bus.service';
import { EventBusName } from '@/common/enums/event.enum';

@Injectable()
export class CrontaskService {
  private readonly logger = new Logger(CrontaskService.name);
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private flashsaleService: FlashSaleService,
    private eventBusService: EventBusService
  ) {}
  // @Cron(CronExpression.EVERY_MINUTE, {
  //   name: 'FlashSale',
  // })
  // async handleCron() {
  //   this.logger.debug('Called when the current second');
  //   const flashsale = await this.flashsaleService.findAllFlashSaleSchedule();
  //   console.log(flashsale);

  //   // Send event to event bus
  //   this.eventBusService.emit(EventBusName.FLASHSALE_SCHEDULE, flashsale);
  // }

  addCronJob(name: string, seconds: string) {
    const job = new CronJob(`${seconds} * * * * *`, () => {
      this.logger.warn(`time (${seconds}) for job ${name} to run!`);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    this.logger.warn(`job ${name} added for each minute at ${seconds} seconds!`);
  }

  deleteCron(name: string) {
    this.schedulerRegistry.deleteCronJob(name);
    this.logger.warn(`job ${name} deleted!`);
  }

  getCrons() {
    const jobs = this.schedulerRegistry.getCronJobs();
    jobs.forEach((value, key, map) => {
      let next;
      try {
        next = value.nextDates();
      } catch (e) {
        next = 'error: next fire date is in the past!';
      }
      this.logger.log(`job: ${key} -> next: ${next}`);
    });
  }
}

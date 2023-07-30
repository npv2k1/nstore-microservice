import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import moment from 'moment';

import { EventBusName } from '@/common/enums/event.enum';

import { EventBusService } from '../event-bus/event-bus.service';

import { DeleteManyFlashSaleArgs, DeleteOneFlashSaleArgs } from './dtos/args/delete-flashsale.args';
import { FindManyFlashSaleArgs, FindOneFlashSaleArgs } from './dtos/args/find-flashsale.args';
import { InsertManyFlashSaleArgs, InsertOneFlashSaleArgs } from './dtos/args/insert-flashsale.args';
import { UpdateManyFlashSaleArgs, UpdateOneFlashSaleArgs } from './dtos/args/update-flashsale.args';
import { UpsertOneFlashSaleArgs } from './dtos/args/upsert-flashsale.args';
import { FlashSaleRepository } from './flashsale.repository';

@Injectable()
export class FlashSaleService {
  constructor(
    private readonly FlashSaleRepo: FlashSaleRepository,
    private readonly eventBusService: EventBusService
  ) {}

  async findAllFlashSaleSchedule() {
    const currentTime = moment();
    const startTimeThreshold = currentTime.clone().add(15, 'minutes');
    const flashsale = await this.FlashSaleRepo.find({
      startDate: {
        $lte: startTimeThreshold.toDate(),
        $gte: currentTime.toDate(),
      },
    });
    return flashsale;
  }

  async findMany(args: FindManyFlashSaleArgs) {
    const FlashSales = await this.FlashSaleRepo.findAll(args.query);
    return FlashSales;
  }

  async findOne(args: FindOneFlashSaleArgs) {
    const flashsale = await this.FlashSaleRepo.findOne(args.query);
    return flashsale;
  }

  async insertOne(args: InsertOneFlashSaleArgs) {
    return await this.FlashSaleRepo.create(args.data);
  }

  async insertMany(args: InsertManyFlashSaleArgs) {
    return await this.FlashSaleRepo.create(args.data);
  }

  async updateOne(args: UpdateOneFlashSaleArgs) {
    return await this.FlashSaleRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyFlashSaleArgs) {
    return await this.FlashSaleRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneFlashSaleArgs) {
    return await this.FlashSaleRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyFlashSaleArgs) {
    return await this.FlashSaleRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneFlashSaleArgs) {
    return await this.FlashSaleRepo.updateOneOrCreate(args.query, args.data);
  }
}

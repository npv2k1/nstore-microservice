import { Inject, Injectable } from '@nestjs/common';
import { DeleteOneFlashSaleArgs, DeleteManyFlashSaleArgs } from './dtos/args/delete-flashsale.args';
import { FindManyFlashSaleArgs, FindOneFlashSaleArgs } from './dtos/args/find-flashsale.args';
import { InsertOneFlashSaleArgs, InsertManyFlashSaleArgs } from './dtos/args/insert-flashsale.args';
import { UpdateOneFlashSaleArgs, UpdateManyFlashSaleArgs } from './dtos/args/update-flashsale.args';
import { UpsertOneFlashSaleArgs } from './dtos/args/upsert-flashsale.args';
import { FlashSaleRepository } from './flashsale.repository';
import { ClientProxy } from '@nestjs/microservices';
import { EventBusService } from '../event-bus/event-bus.service';
import { EventBusName } from '@/common/enums/event.enum';

@Injectable()
export class FlashSaleService {
  constructor(private readonly FlashSaleRepo: FlashSaleRepository, private readonly eventBusService: EventBusService) {}

  async flashsaleSuccess() {
    // return await this.orderService.emit('flashsale_success', { message: 'FlashSale Success' });
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

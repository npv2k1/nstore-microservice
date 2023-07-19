import { Inject, Injectable } from '@nestjs/common';
import { DeleteOneFlashSaleArgs, DeleteManyFlashSaleArgs } from './dtos/args/delete-flashsale.args';
import { FindManyFlashSaleArgs, FindOneFlashSaleArgs } from './dtos/args/find-flashsale.args';
import { InsertOneFlashSaleArgs, InsertManyFlashSaleArgs } from './dtos/args/insert-flashsale.args';
import { UpdateOneFlashSaleArgs, UpdateManyFlashSaleArgs } from './dtos/args/update-flashsale.args';
import { UpsertOneFlashSaleArgs } from './dtos/args/upsert-flashsale.args';
import { FlashSaleRepository } from './flashsale.repository';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class FlashSaleService {
  constructor(private readonly FlashSaleRepo: FlashSaleRepository) {}

  async flashsaleSuccess() {
    // return await this.orderService.emit('flashsale_success', { message: 'FlashSale Success' });
  }

  async create(args: InsertOneFlashSaleArgs) {
    return this.FlashSaleRepo.create(args.data);
  }

  async findMany(args: FindManyFlashSaleArgs) {
    const FlashSales = await this.FlashSaleRepo.findAll(args.query);
    return FlashSales;
  }

  async findOne(args: FindOneFlashSaleArgs) {
    return this.FlashSaleRepo.findOne(args.query);
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

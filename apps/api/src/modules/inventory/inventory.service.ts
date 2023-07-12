import { Injectable } from '@nestjs/common';
import {
  DeleteOneInventoryArgs,
  DeleteManyInventoryArgs,
} from './dtos/args/delete-inventory.args';
import {
  FindManyInventoryArgs,
  FindOneInventoryArgs,
} from './dtos/args/find-inventory.args';
import {
  InsertOneInventoryArgs,
  InsertManyInventoryArgs,
} from './dtos/args/insert-inventory.args';
import {
  UpdateOneInventoryArgs,
  UpdateManyInventoryArgs,
} from './dtos/args/update-inventory.args';
import { UpsertOneInventoryArgs } from './dtos/args/upsert-inventory.args';
import { InventoryRepository } from './inventory.repository';
import { convertToMultiLevel } from '@/utils';

@Injectable()
export class InventoryService {
  constructor(private readonly InventoryRepo: InventoryRepository) {}

  async create(args: InsertOneInventoryArgs) {
    return this.InventoryRepo.create(args.data);
  }

  async findMany(args: FindManyInventoryArgs) {
    const makeQuery = convertToMultiLevel(args.query);
    console.log('makeQuery', makeQuery, args);
    const Inventorys = await this.InventoryRepo.find(makeQuery);
    return Inventorys;
  }

  async findOne(args: FindOneInventoryArgs) {
    return this.InventoryRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneInventoryArgs) {
    return await this.InventoryRepo.create(args.data);
  }

  async insertMany(args: InsertManyInventoryArgs) {
    return await this.InventoryRepo.create(args.data);
  }

  async updateOne(args: UpdateOneInventoryArgs) {
    return await this.InventoryRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyInventoryArgs) {
    return await this.InventoryRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneInventoryArgs) {
    return await this.InventoryRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyInventoryArgs) {
    return await this.InventoryRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneInventoryArgs) {
    return await this.InventoryRepo.updateOneOrCreate(args.query, args.data);
  }
}

import { Injectable } from '@nestjs/common';
import {
  DeleteOneProductArgs,
  DeleteManyProductArgs,
} from './dtos/args/delete-product.args';
import {
  FindManyProductArgs,
  FindOneProductArgs,
} from './dtos/args/find-product.args';
import {
  InsertOneProductArgs,
  InsertManyProductArgs,
} from './dtos/args/insert-product.args';
import {
  UpdateOneProductArgs,
  UpdateManyProductArgs,
} from './dtos/args/update-product.args';
import { UpsertOneProductArgs } from './dtos/args/upsert-product.args';
import { ProductRepository } from './product.repository';
import { convertToMultiLevel } from '@/utils';

@Injectable()
export class ProductService {
  constructor(private readonly ProductRepo: ProductRepository) {}

  async create(args: InsertOneProductArgs) {
    return this.ProductRepo.create(args.data);
  }

  async findMany(args: FindManyProductArgs) {
    const Products = await this.ProductRepo.find(args.query);
    return Products;
  }

  async findOne(args: FindOneProductArgs) {
    return this.ProductRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneProductArgs) {
    return await this.ProductRepo.create(args.data);
  }

  async insertMany(args: InsertManyProductArgs) {
    return await this.ProductRepo.create(args.data);
  }

  async updateOne(args: UpdateOneProductArgs) {
    return await this.ProductRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyProductArgs) {
    return await this.ProductRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneProductArgs) {
    return await this.ProductRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyProductArgs) {
    return await this.ProductRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneProductArgs) {
    return await this.ProductRepo.updateOneOrCreate(args.query, args.data);
  }
}

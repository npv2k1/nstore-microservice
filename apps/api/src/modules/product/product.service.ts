import { Injectable } from '@nestjs/common';

import { DeleteManyProductArgs, DeleteOneProductArgs } from './dtos/args/delete-product.args';
import { FindManyProductArgs, FindOneProductArgs } from './dtos/args/find-product.args';
import { InsertManyProductArgs, InsertOneProductArgs } from './dtos/args/insert-product.args';
import { UpdateManyProductArgs, UpdateOneProductArgs } from './dtos/args/update-product.args';
import { UpsertOneProductArgs } from './dtos/args/upsert-product.args';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepository) {}

  async create(args: InsertOneProductArgs) {
    return this.productRepo.create(args.data);
  }

  async findMany(args: FindManyProductArgs) {
    const Products = await this.productRepo.find(args.query);
    return Products;
  }

  async findManyPaginate(args: FindManyProductArgs) {
    const { paginate } = args;
    return await this.productRepo.paginate(args.query, paginate);
  }

  async findOne(args: FindOneProductArgs) {
    return this.productRepo.findOne(args.query);
  }

  async findById(id: string) {
    const product = this.productRepo.findById(id);
    return product;
  }

  async insertOne(args: InsertOneProductArgs) {
    return await this.productRepo.create(args.data);
  }

  async insertMany(args: InsertManyProductArgs) {
    return await this.productRepo.create(args.data);
  }

  async updateOne(args: UpdateOneProductArgs) {
    return await this.productRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyProductArgs) {
    return await this.productRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneProductArgs) {
    return await this.productRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyProductArgs) {
    return await this.productRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneProductArgs) {
    return await this.productRepo.updateOneOrCreate(args.query, args.data);
  }

  async reduceProductQuantity(productId: string, quantity: number) {
    return await this.productRepo.updateOne({ _id: productId }, { $inc: { quantity: -quantity } });
  }

  async increaseProductQuantity(productId: string, quantity: number) {
    return await this.productRepo.updateOne({ _id: productId }, { $inc: { quantity: quantity } });
  }
}

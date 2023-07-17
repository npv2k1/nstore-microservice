import { Inject, Injectable } from '@nestjs/common';
import { DeleteOneCartArgs, DeleteManyCartArgs } from './dtos/args/delete-cart.args';
import { FindManyCartArgs, FindOneCartArgs } from './dtos/args/find-cart.args';
import { InsertOneCartArgs, InsertManyCartArgs } from './dtos/args/insert-cart.args';
import { UpdateOneCartArgs, UpdateManyCartArgs } from './dtos/args/update-cart.args';
import { UpsertOneCartArgs } from './dtos/args/upsert-cart.args';
import { CartRepository } from './cart.repository';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CartService {
  constructor(private readonly CartRepo: CartRepository) {}

  async create(args: InsertOneCartArgs) {
    return this.CartRepo.create(args.data);
  }

  async findMany(args: FindManyCartArgs) {
    const Carts = await this.CartRepo.findAll(args.query);
    return Carts;
  }

  async findOne(args: FindOneCartArgs) {
    return this.CartRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneCartArgs) {
    return await this.CartRepo.create(args.data);
  }

  async insertMany(args: InsertManyCartArgs) {
    return await this.CartRepo.create(args.data);
  }

  async updateOne(args: UpdateOneCartArgs) {
    return await this.CartRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyCartArgs) {
    return await this.CartRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneCartArgs) {
    return await this.CartRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyCartArgs) {
    return await this.CartRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneCartArgs) {
    return await this.CartRepo.updateOneOrCreate(args.query, args.data);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { AuthUser } from '../auth/entities/auth-user,entity';
import { ProductService } from '../product/product.service';

import { DeleteManyCartArgs, DeleteOneCartArgs } from './dtos/args/delete-cart.args';
import { FindManyCartArgs, FindOneCartArgs } from './dtos/args/find-cart.args';
import { InsertManyCartArgs, InsertOneCartArgs } from './dtos/args/insert-cart.args';
import { UpdateManyCartArgs, UpdateOneCartArgs } from './dtos/args/update-cart.args';
import { UpsertOneCartArgs } from './dtos/args/upsert-cart.args';
import { CartRepository } from './cart.repository';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepo: CartRepository,
    private readonly productService: ProductService
  ) {}

  async create(args: InsertOneCartArgs) {
    return this.cartRepo.create(args.data);
  }

  async findMany(args: FindManyCartArgs) {
    const Carts = await this.cartRepo.findAll(args.query);
    return Carts;
  }

  async findOne(args: FindOneCartArgs) {
    console.log('🚀 ~ file: cart.service.ts:26 ~ CartService ~ findOne ~ args:', args);
    return this.cartRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneCartArgs) {
    return await this.cartRepo.create(args.data);
  }

  async insertMany(args: InsertManyCartArgs) {
    return await this.cartRepo.create(args.data);
  }

  async updateOne(args: UpdateOneCartArgs) {
    return await this.cartRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyCartArgs) {
    return await this.cartRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneCartArgs) {
    return await this.cartRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyCartArgs) {
    return await this.cartRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneCartArgs) {
    return await this.cartRepo.updateOneOrCreate(args.query, args.data);
  }

  async upsertOneAndIncreaseQuantity(args: InsertOneCartArgs) {
    const product = await this.productService.findById(args.data.product);
    if (!product) {
      throw new Error('Product not found');
    }
    const cart = await this.cartRepo.findOne({
      product: args.data.product,
      customer: args.data.customer,
    });
    if (!cart) {
      return await this.cartRepo.create(args.data);
    }
    return await this.cartRepo.updateOneOrCreate(
      {
        product: args.data.product,
        customer: args.data.customer,
      },
      {
        ...args.data,
        quantity: cart.quantity + args.data.quantity,
      }
    );
  }

  async getCartByUser(id: string) {
    return await this.cartRepo.findAll({ customer: id });
  }
}

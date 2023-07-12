import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteOneOrderArgs,
  DeleteManyOrderArgs,
} from './dtos/args/delete-order.args';
import {
  FindManyOrderArgs,
  FindOneOrderArgs,
} from './dtos/args/find-order.args';
import {
  InsertOneOrderArgs,
  InsertManyOrderArgs,
} from './dtos/args/insert-order.args';
import {
  UpdateOneOrderArgs,
  UpdateManyOrderArgs,
} from './dtos/args/update-order.args';
import { UpsertOneOrderArgs } from './dtos/args/upsert-order.args';
import { OrderRepository } from './order.repository';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(
    private readonly OrderRepo: OrderRepository,
    @Inject('ORDER_PROCESS_SERVICE')
    private readonly orderProcessService: ClientProxy
  ) {}

  async create(args: InsertOneOrderArgs) {
   
    return this.OrderRepo.create(args.data);
  }

  async findMany(args: FindManyOrderArgs) {
    const Orders = await this.OrderRepo.findAll(args.query);
    return Orders;
  }

  async findOne(args: FindOneOrderArgs) {
    return this.OrderRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneOrderArgs) {
     try {
       console.log('ping');
       this.orderProcessService.send('ping', 'ping').subscribe({
         next: (result) => {
           console.log(
             '🚀 ~ file: mail-service.service.ts:34 ~ MailServiceService ~ .subscribe ~ result:',
             result
           );
           //  resolve(result);
         },
         error: (err) => {
           console.log(err);
         },
       });
     } catch (error) {
       console.log(error);
     }
    return await this.OrderRepo.create(args.data);
  }

  async insertMany(args: InsertManyOrderArgs) {
    return await this.OrderRepo.create(args.data);
  }

  async updateOne(args: UpdateOneOrderArgs) {
    return await this.OrderRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyOrderArgs) {
    return await this.OrderRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneOrderArgs) {
    return await this.OrderRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyOrderArgs) {
    return await this.OrderRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneOrderArgs) {
    return await this.OrderRepo.updateOneOrCreate(args.query, args.data);
  }
}

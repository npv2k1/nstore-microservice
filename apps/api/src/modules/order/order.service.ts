import { Inject, Injectable } from '@nestjs/common';
import { DeleteOneOrderArgs, DeleteManyOrderArgs } from './dtos/args/delete-order.args';
import { FindManyOrderArgs, FindOneOrderArgs } from './dtos/args/find-order.args';
import { InsertOneOrderArgs, InsertManyOrderArgs } from './dtos/args/insert-order.args';
import { UpdateOneOrderArgs, UpdateManyOrderArgs } from './dtos/args/update-order.args';
import { UpsertOneOrderArgs } from './dtos/args/upsert-order.args';
import { OrderRepository } from './order.repository';
import { ClientProxy } from '@nestjs/microservices';
import { AuthUser } from '../auth/entities/auth-user,entity';
import { CartService } from '../cart/cart.service';
import { CustomerService } from '../customer/customer.service';
import { Order, OrderItem } from './entities/order.entity';
import { EventBusService } from '../event-bus/event-bus.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepository,
    private readonly cartService: CartService,
    private readonly customerService: CustomerService,

    private readonly eventBusService: EventBusService
  ) {}

  async create(args: InsertOneOrderArgs) {
    const cart = await this.cartService.getCartByUser(args.data.customer);

    if (!cart) {
      throw new Error('Cart is empty');
    }
    const orderItem = cart.map((item) => {
      return {
        product: item.product,
        quantity: item.quantity,
        subtotal: item.subtotal,
      };
    });

    return this.orderRepo.create(args.data);
  }

  async findMany(args: FindManyOrderArgs) {
    const Orders = await this.orderRepo.findAll(args.query);
    return Orders;
  }

  async findOne(args: FindOneOrderArgs) {
    return this.orderRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneOrderArgs) {
    const cart = await this.cartService.getCartByUser(args.data.customer);

    if (!cart) {
      throw new Error('Cart is empty');
    }
    const orderItem = cart.map((item) => {
      return {
        product: item.product._id,
        price: item.product.price,
        quantity: item.quantity,
        subtotal: item.subtotal,
      };
    });

    console.log('orderItem', orderItem);

    // Calculate total
    const productTotal = cart.reduce((acc, item) => {
      return acc + item.subtotal;
    }, 0);

    // Calculate delivery fee
    const deliveryFee = 0;

    // Calulate discount

    const discount = 0;

    // Calculate total
    const total = productTotal + deliveryFee - discount;

    const orderInfo = {
      ...args.data,
      status: 'pending',
      deliveryFee: deliveryFee,
      productTotal: productTotal,
      discount: discount,
      total: total,
      items: orderItem,
    };

    await this.eventBusService.emit('OrderCreated', orderInfo);

    console.log('orderInfo', orderInfo);
    // TODO: Clear cart

    return await this.orderRepo.create(orderInfo);
  }

  async insertMany(args: InsertManyOrderArgs) {
    return await this.orderRepo.create(args.data);
  }

  async updateOne(args: UpdateOneOrderArgs) {
    return await this.orderRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyOrderArgs) {
    return await this.orderRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneOrderArgs) {
    return await this.orderRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyOrderArgs) {
    return await this.orderRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneOrderArgs) {
    return await this.orderRepo.updateOneOrCreate(args.query, args.data);
  }
}

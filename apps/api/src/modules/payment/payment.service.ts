import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { EventBusName } from '@/common/enums/event.enum';

import { EventBusService } from '../event-bus/event-bus.service';

import { DeleteManyPaymentArgs, DeleteOnePaymentArgs } from './dtos/args/delete-payment.args';
import { FindManyPaymentArgs, FindOnePaymentArgs } from './dtos/args/find-payment.args';
import { InsertManyPaymentArgs, InsertOnePaymentArgs } from './dtos/args/insert-payment.args';
import { UpdateManyPaymentArgs, UpdateOnePaymentArgs } from './dtos/args/update-payment.args';
import { UpsertOnePaymentArgs } from './dtos/args/upsert-payment.args';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {
  constructor(
    private readonly PaymentRepo: PaymentRepository,
    private readonly eventBusService: EventBusService
  ) {}

  async paymentSuccess() {
    return await this.eventBusService.emit(EventBusName.PAYMENT_COMPLETED, {
      message: 'Payment Success',
    });
  }

  async create(args: InsertOnePaymentArgs) {
    return this.PaymentRepo.create(args.data);
  }

  async findMany(args: FindManyPaymentArgs) {
    const Payments = await this.PaymentRepo.findAll(args.query);
    return Payments;
  }

  async findOne(args: FindOnePaymentArgs) {
    return this.PaymentRepo.findOne(args.query);
  }

  async insertOne(args: InsertOnePaymentArgs) {
    return await this.PaymentRepo.create(args.data);
  }

  async insertMany(args: InsertManyPaymentArgs) {
    return await this.PaymentRepo.create(args.data);
  }

  async updateOne(args: UpdateOnePaymentArgs) {
    return await this.PaymentRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyPaymentArgs) {
    return await this.PaymentRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOnePaymentArgs) {
    return await this.PaymentRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyPaymentArgs) {
    return await this.PaymentRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOnePaymentArgs) {
    return await this.PaymentRepo.updateOneOrCreate(args.query, args.data);
  }
}

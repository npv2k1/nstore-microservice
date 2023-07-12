import { Inject, Injectable } from '@nestjs/common';
import { DeleteOneShipmentArgs, DeleteManyShipmentArgs } from './dtos/args/delete-shipment.args';
import { FindManyShipmentArgs, FindOneShipmentArgs } from './dtos/args/find-shipment.args';
import { InsertOneShipmentArgs, InsertManyShipmentArgs } from './dtos/args/insert-shipment.args';
import { UpdateOneShipmentArgs, UpdateManyShipmentArgs } from './dtos/args/update-shipment.args';
import { UpsertOneShipmentArgs } from './dtos/args/upsert-shipment.args';
import { ShipmentRepository } from './shipment.repository';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ShipmentService {
  constructor(
    private readonly ShipmentRepo: ShipmentRepository,
    @Inject('ORDER_SERVICE')
    private readonly orderService: ClientProxy
  ) {}

  async shipmentSuccess() {
    return await this.orderService.emit('shipment_success', { message: 'Shipment Success' });
  }

  async create(args: InsertOneShipmentArgs) {
    return this.ShipmentRepo.create(args.data);
  }

  async findMany(args: FindManyShipmentArgs) {
    const Shipments = await this.ShipmentRepo.findAll(args.query);
    return Shipments;
  }

  async findOne(args: FindOneShipmentArgs) {
    return this.ShipmentRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneShipmentArgs) {
    return await this.ShipmentRepo.create(args.data);
  }

  async insertMany(args: InsertManyShipmentArgs) {
    return await this.ShipmentRepo.create(args.data);
  }

  async updateOne(args: UpdateOneShipmentArgs) {
    return await this.ShipmentRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyShipmentArgs) {
    return await this.ShipmentRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneShipmentArgs) {
    return await this.ShipmentRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyShipmentArgs) {
    return await this.ShipmentRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneShipmentArgs) {
    return await this.ShipmentRepo.updateOneOrCreate(args.query, args.data);
  }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';
import { DeleteOneShipmentArgs, DeleteManyShipmentArgs } from './dtos/args/delete-shipment.args';
import { FindManyShipmentArgs, FindOneShipmentArgs } from './dtos/args/find-shipment.args';
import { InsertOneShipmentArgs, InsertManyShipmentArgs } from './dtos/args/insert-shipment.args';
import { UpdateOneShipmentArgs, UpdateManyShipmentArgs } from './dtos/args/update-shipment.args';
import { UpsertOneShipmentArgs } from './dtos/args/upsert-shipment.args';
import { Shipment } from './entities/shipment.entity';
import { ShipmentService } from './shipment.service';

@Resolver(() => Shipment)
export class ShipmentResolver {
  constructor(private readonly shipmentService: ShipmentService) {}
  @Query(() => [Shipment], {
    name: `${pluralize.plural(Shipment.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyShipmentArgs) {
    return this.shipmentService.findMany(args);
  }

  @Query(() => Shipment, { name: Shipment.name.toLowerCase() })
  async findOne(@Args() args: FindOneShipmentArgs) {
    return this.shipmentService.findOne(args);
  }

  @Mutation(() => Shipment, {
    name: `deleteOne${pluralize.singular(Shipment.name)}`,
  })
  async deleteOne(@Args() args: DeleteOneShipmentArgs) {
    return await this.shipmentService.deleteOne(args);
  }

  // @Mutation(() => Shipment, {
  //   name: `deleteMany${pluralize.plural(Shipment.name)}`,
  // })
  // async deleteMany(@Args() args: DeleteManyShipmentArgs) {
  //   return await this.shipmentService.deleteMany(args);
  // }

  @Mutation(() => Shipment, {
    name: `insertOne${pluralize.singular(Shipment.name)}`,
  })
  async insertOne(@Args() args: InsertOneShipmentArgs) {
    return await this.shipmentService.insertOne(args);
  }

  // @Mutation(() => Shipment, {
  //   name: `insertMany${pluralize.plural(Shipment.name)}`,
  // })
  // async insertMany(@Args() args: InsertManyShipmentArgs) {
  //   return await this.shipmentService.insertMany(args);
  // }

  @Mutation(() => Shipment, {
    name: `updateOne${pluralize.singular(Shipment.name)}`,
  })
  async updateOne(@Args() args: UpdateOneShipmentArgs) {
    return await this.shipmentService.updateOne(args);
  }

  // @Mutation(() => Shipment, {
  //   name: `updateMany${pluralize.plural(Shipment.name)}`,
  // })
  // async updateMany(@Args() args: UpdateManyShipmentArgs) {
  //   return await this.shipmentService.updateMany(args);
  // }

  // @Mutation(() => Shipment, {
  //   name: `upsertOne${pluralize.singular(Shipment.name)}`,
  // })
  // async upsertOne(@Args() args: UpsertOneShipmentArgs) {
  //   return await this.shipmentService.upsertOne(args);
  // }
}

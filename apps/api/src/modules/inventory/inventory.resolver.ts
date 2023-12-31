import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';

import { DeleteManyInventoryArgs, DeleteOneInventoryArgs } from './dtos/args/delete-inventory.args';
import { FindManyInventoryArgs, FindOneInventoryArgs } from './dtos/args/find-inventory.args';
import { InsertManyInventoryArgs, InsertOneInventoryArgs } from './dtos/args/insert-inventory.args';
import { UpdateManyInventoryArgs, UpdateOneInventoryArgs } from './dtos/args/update-inventory.args';
import { UpsertOneInventoryArgs } from './dtos/args/upsert-inventory.args';
import { Inventory } from './entities/inventory.entity';
import { InventoryService } from './inventory.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '@/common/guards';
import { Roles } from '@/common/decorators';
import { ROLE } from '@/common/enums/role.enum';

@Roles(ROLE.ADMIN)
@UseGuards(GqlAuthGuard)
@Resolver(() => Inventory)
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}
  @Query(() => [Inventory], {
    name: `${pluralize.plural(Inventory.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyInventoryArgs) {
    return this.inventoryService.findMany(args);
  }

  @Query(() => Inventory, { name: Inventory.name.toLowerCase() })
  async findOne(@Args() args: FindOneInventoryArgs) {
    return this.inventoryService.findOne(args);
  }

  @Mutation(() => Inventory, {
    name: `deleteOne${pluralize.singular(Inventory.name)}`,
  })
  async deleteOne(@Args() args: DeleteOneInventoryArgs) {
    return await this.inventoryService.deleteOne(args);
  }

  // @Mutation(() => Inventory, {
  //   name: `deleteMany${pluralize.plural(Inventory.name)}`,
  // })
  // async deleteMany(@Args() args: DeleteManyInventoryArgs) {
  //   return await this.inventoryService.deleteMany(args);
  // }

  @Mutation(() => Inventory, {
    name: `insertOne${pluralize.singular(Inventory.name)}`,
  })
  async insertOne(@Args() args: InsertOneInventoryArgs) {
    return await this.inventoryService.insertOne(args);
  }

  // @Mutation(() => Inventory, {
  //   name: `insertMany${pluralize.plural(Inventory.name)}`,
  // })
  // async insertMany(@Args() args: InsertManyInventoryArgs) {
  //   return await this.inventoryService.insertMany(args);
  // }

  @Mutation(() => Inventory, {
    name: `updateOne${pluralize.singular(Inventory.name)}`,
  })
  async updateOne(@Args() args: UpdateOneInventoryArgs) {
    return await this.inventoryService.updateOne(args);
  }

  // @Mutation(() => Inventory, {
  //   name: `updateMany${pluralize.plural(Inventory.name)}`,
  // })
  // async updateMany(@Args() args: UpdateManyInventoryArgs) {
  //   return await this.inventoryService.updateMany(args);
  // }

  // @Mutation(() => Inventory, {
  //   name: `upsertOne${pluralize.singular(Inventory.name)}`,
  // })
  // async upsertOne(@Args() args: UpsertOneInventoryArgs) {
  //   return await this.inventoryService.upsertOne(args);
  // }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';
import { DeleteOneFlashSaleArgs, DeleteManyFlashSaleArgs } from './dtos/args/delete-flashsale.args';
import { FindManyFlashSaleArgs, FindOneFlashSaleArgs } from './dtos/args/find-flashsale.args';
import { InsertOneFlashSaleArgs, InsertManyFlashSaleArgs } from './dtos/args/insert-flashsale.args';
import { UpdateOneFlashSaleArgs, UpdateManyFlashSaleArgs } from './dtos/args/update-flashsale.args';
import { UpsertOneFlashSaleArgs } from './dtos/args/upsert-flashsale.args';
import { FlashSale } from './entities/flashsale.entity';
import { FlashSaleService } from './flashsale.service';

@Resolver(() => FlashSale)
export class FlashSaleResolver {
  constructor(private readonly flashsaleService: FlashSaleService) {}
  @Query(() => [FlashSale], {
    name: `${pluralize.plural(FlashSale.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyFlashSaleArgs) {
    return this.flashsaleService.findMany(args);
  }

  @Query(() => FlashSale, { name: FlashSale.name.toLowerCase() })
  async findOne(@Args() args: FindOneFlashSaleArgs) {
    return this.flashsaleService.findOne(args);
  }

  @Mutation(() => FlashSale, {
    name: `deleteOne${pluralize.singular(FlashSale.name)}`,
  })
  async deleteOne(@Args() args: DeleteOneFlashSaleArgs) {
    return await this.flashsaleService.deleteOne(args);
  }

  // @Mutation(() => FlashSale, {
  //   name: `deleteMany${pluralize.plural(FlashSale.name)}`,
  // })
  // async deleteMany(@Args() args: DeleteManyFlashSaleArgs) {
  //   return await this.flashsaleService.deleteMany(args);
  // }

  @Mutation(() => FlashSale, {
    name: `insertOne${pluralize.singular(FlashSale.name)}`,
  })
  async insertOne(@Args() args: InsertOneFlashSaleArgs) {
    return await this.flashsaleService.insertOne(args);
  }

  // @Mutation(() => FlashSale, {
  //   name: `insertMany${pluralize.plural(FlashSale.name)}`,
  // })
  // async insertMany(@Args() args: InsertManyFlashSaleArgs) {
  //   return await this.flashsaleService.insertMany(args);
  // }

  @Mutation(() => FlashSale, {
    name: `updateOne${pluralize.singular(FlashSale.name)}`,
  })
  async updateOne(@Args() args: UpdateOneFlashSaleArgs) {
    return await this.flashsaleService.updateOne(args);
  }

  // @Mutation(() => FlashSale, {
  //   name: `updateMany${pluralize.plural(FlashSale.name)}`,
  // })
  // async updateMany(@Args() args: UpdateManyFlashSaleArgs) {
  //   return await this.flashsaleService.updateMany(args);
  // }

  @Mutation(() => FlashSale, {
    name: `upsertOne${pluralize.singular(FlashSale.name)}`,
  })
  async upsertOne(@Args() args: UpsertOneFlashSaleArgs) {
    return await this.flashsaleService.upsertOne(args);
  }
}

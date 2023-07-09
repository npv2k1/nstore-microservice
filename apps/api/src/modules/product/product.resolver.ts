import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';
import {
  DeleteOneProductArgs,
  DeleteManyProductArgs,
} from './dtos/args/delete-product.args';
import {
  FindManyProductArgs,
  FindOneProductArgs,
} from './dtos/args/find-product.args';
import {
  InsertOneProductArgs,
  InsertManyProductArgs,
} from './dtos/args/insert-product.args';
import {
  UpdateOneProductArgs,
  UpdateManyProductArgs,
} from './dtos/args/update-product.args';
import { UpsertOneProductArgs } from './dtos/args/upsert-product.args';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}
  @Query(() => [Product], {
    name: `${pluralize.plural(Product.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyProductArgs) {
    return this.productService.findMany(args);
  }

  @Query(() => Product, { name: Product.name.toLowerCase() })
  async findOne(@Args() args: FindOneProductArgs) {
    return this.productService.findOne(args);
  }

  @Mutation(() => Product, {
    name: `deleteOne${pluralize.singular(Product.name)}`,
  })
  async deleteOne(@Args() args: DeleteOneProductArgs) {
    return await this.productService.deleteOne(args);
  }

  @Mutation(() => Product, {
    name: `deleteMany${pluralize.plural(Product.name)}`,
  })
  async deleteMany(@Args() args: DeleteManyProductArgs) {
    return await this.productService.deleteMany(args);
  }

  @Mutation(() => Product, {
    name: `insertOne${pluralize.singular(Product.name)}`,
  })
  async insertOne(@Args() args: InsertOneProductArgs) {
    return await this.productService.insertOne(args);
  }

  @Mutation(() => Product, {
    name: `insertMany${pluralize.plural(Product.name)}`,
  })
  async insertMany(@Args() args: InsertManyProductArgs) {
    return await this.productService.insertMany(args);
  }

  @Mutation(() => Product, {
    name: `updateOne${pluralize.singular(Product.name)}`,
  })
  async updateOne(@Args() args: UpdateOneProductArgs) {
    return await this.productService.updateOne(args);
  }

  @Mutation(() => Product, {
    name: `updateMany${pluralize.plural(Product.name)}`,
  })
  async updateMany(@Args() args: UpdateManyProductArgs) {
    return await this.productService.updateMany(args);
  }

  @Mutation(() => Product, {
    name: `upsertOne${pluralize.singular(Product.name)}`,
  })
  async upsertOne(@Args() args: UpsertOneProductArgs) {
    return await this.productService.upsertOne(args);
  }
}

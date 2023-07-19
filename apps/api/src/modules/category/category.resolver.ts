import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';
import {
  DeleteOneCategoryArgs,
  DeleteManyCategoryArgs,
} from './dtos/args/delete-category.args';
import {
  FindManyCategoryArgs,
  FindOneCategoryArgs,
} from './dtos/args/find-category.args';
import {
  InsertOneCategoryArgs,
  InsertManyCategoryArgs,
} from './dtos/args/insert-category.args';
import {
  UpdateOneCategoryArgs,
  UpdateManyCategoryArgs,
} from './dtos/args/update-category.args';
import { UpsertOneCategoryArgs } from './dtos/args/upsert-category.args';
import { Category } from './entities/category.entity';
import { CategoryService } from './category.service';
import { Product } from '../product/entities/product.entity';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  @Query(() => [Category], {
    name: `${pluralize.plural(Category.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyCategoryArgs) {
    return this.categoryService.findMany(args);
  }

  @Query(() => Category, { name: Category.name.toLowerCase() })
  async findOne(@Args() args: FindOneCategoryArgs) {
    return this.categoryService.findOne(args);
  }

  @Mutation(() => Category, {
    name: `deleteOne${pluralize.singular(Category.name)}`,
  })
  async deleteOne(@Args() args: DeleteOneCategoryArgs) {
    return await this.categoryService.deleteOne(args);
  }

  // @Mutation(() => Category, {
  //   name: `deleteMany${pluralize.plural(Category.name)}`,
  // })
  // async deleteMany(@Args() args: DeleteManyCategoryArgs) {
  //   return await this.categoryService.deleteMany(args);
  // }

  @Mutation(() => Category, {
    name: `insertOne${pluralize.singular(Category.name)}`,
  })
  async insertOne(@Args() args: InsertOneCategoryArgs) {
    return await this.categoryService.insertOne(args);
  }

  // @Mutation(() => Category, {
  //   name: `insertMany${pluralize.plural(Category.name)}`,
  // })
  // async insertMany(@Args() args: InsertManyCategoryArgs) {
  //   return await this.categoryService.insertMany(args);
  // }

  @Mutation(() => Category, {
    name: `updateOne${pluralize.singular(Category.name)}`,
  })
  async updateOne(@Args() args: UpdateOneCategoryArgs) {
    return await this.categoryService.updateOne(args);
  }

  // @Mutation(() => Category, {
  //   name: `updateMany${pluralize.plural(Category.name)}`,
  // })
  // async updateMany(@Args() args: UpdateManyCategoryArgs) {
  //   return await this.categoryService.updateMany(args);
  // }

  // @Mutation(() => Category, {
  //   name: `upsertOne${pluralize.singular(Category.name)}`,
  // })
  // async upsertOne(@Args() args: UpsertOneCategoryArgs) {
  //   return await this.categoryService.upsertOne(args);
  // }

  @ResolveField(() => [Product], { name: 'products', nullable: true })
  async products(@Parent() parent: Category) {
    // return (await this.newsService.countUpvote(news._id)) || 0;
    
    return null;
  }
}

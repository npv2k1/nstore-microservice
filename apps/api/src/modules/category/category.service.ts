import { Injectable } from '@nestjs/common';
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
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly CategoryRepo: CategoryRepository) {}

  async create(args: InsertOneCategoryArgs) {
    return this.CategoryRepo.create(args.data);
  }

  async findMany(args: FindManyCategoryArgs) {
    const Categorys = await this.CategoryRepo.findAll(args.query);
    return Categorys;
  }

  async findManyPaginate(args: FindManyCategoryArgs) {
    const { paginate } = args;
    return await this.CategoryRepo.paginate(args.query, paginate);  
  }

  async findOne(args: FindOneCategoryArgs) {
    return this.CategoryRepo.findOne(args.query);
  }

  async insertOne(args: InsertOneCategoryArgs) {
    return await this.CategoryRepo.create(args.data);
  }

  async insertMany(args: InsertManyCategoryArgs) {
    return await this.CategoryRepo.create(args.data);
  }

  async updateOne(args: UpdateOneCategoryArgs) {
    return await this.CategoryRepo.updateOne(args.query, args.data);
  }

  async updateMany(args: UpdateManyCategoryArgs) {
    return await this.CategoryRepo.updateMany(args.query, args.data);
  }

  async deleteOne(args: DeleteOneCategoryArgs) {
    return await this.CategoryRepo.deleteOne(args.query);
  }

  async deleteMany(args: DeleteManyCategoryArgs) {
    return await this.CategoryRepo.deleteMany(args.query);
  }

  async upsertOne(args: UpsertOneCategoryArgs) {
    return await this.CategoryRepo.updateOneOrCreate(args.query, args.data);
  }
}

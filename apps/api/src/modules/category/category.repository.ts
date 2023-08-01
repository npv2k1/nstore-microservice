import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@/common/mongoose/mongoose';

import { Category, CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoryRepository
  extends BaseRepository<CategoryDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(Category.name) model: Model<CategoryDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

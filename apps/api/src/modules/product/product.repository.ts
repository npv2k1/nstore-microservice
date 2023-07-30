import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@/common/mongoose/mongoose';

import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductRepository
  extends BaseRepository<ProductDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(Product.name) model: Model<ProductDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@/common/mongoose/mongoose';

import { Cart, CartDocument } from './entities/cart.entity';

@Injectable()
export class CartRepository extends BaseRepository<CartDocument> implements OnApplicationBootstrap {
  constructor(@InjectModel(Cart.name) model: Model<CartDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

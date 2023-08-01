import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@/common/mongoose/mongoose';

import { Order, OrderDocument } from './entities/order.entity';

@Injectable()
export class OrderRepository
  extends BaseRepository<OrderDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(Order.name) model: Model<OrderDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

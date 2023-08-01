import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@/common/mongoose/mongoose';

import { FlashSale, FlashSaleDocument } from './entities/flashsale.entity';

@Injectable()
export class FlashSaleRepository
  extends BaseRepository<FlashSaleDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(FlashSale.name) model: Model<FlashSaleDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

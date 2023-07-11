import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@/common/mongoose/mongoose';
import { Inventory, InventoryDocument } from './entities/inventory.entity';

@Injectable()
export class InventoryRepository
  extends BaseRepository<InventoryDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(Inventory.name) model: Model<InventoryDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

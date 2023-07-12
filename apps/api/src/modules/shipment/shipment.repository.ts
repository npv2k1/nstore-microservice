import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@/common/mongoose/mongoose';
import { Shipment, ShipmentDocument } from './entities/shipment.entity';

@Injectable()
export class ShipmentRepository extends BaseRepository<ShipmentDocument> implements OnApplicationBootstrap {
  constructor(@InjectModel(Shipment.name) model: Model<ShipmentDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

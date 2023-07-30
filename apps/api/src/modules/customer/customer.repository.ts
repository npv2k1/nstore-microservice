import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@/common/mongoose/mongoose';

import { Customer, CustomerDocument } from './entities/customer.entity';

@Injectable()
export class CustomerRepository
  extends BaseRepository<CustomerDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(Customer.name) model: Model<CustomerDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

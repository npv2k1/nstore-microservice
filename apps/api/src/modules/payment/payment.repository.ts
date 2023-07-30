import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@/common/mongoose/mongoose';

import { Payment, PaymentDocument } from './entities/payment.entity';

@Injectable()
export class PaymentRepository
  extends BaseRepository<PaymentDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(Payment.name) model: Model<PaymentDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

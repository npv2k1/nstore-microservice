import { Injectable, Query, UseGuards } from '@nestjs/common';

import { UserEntity } from '@/common/decorators';
import { GqlAuthGuard } from '@/common/guards';

import { User } from '../user/entities/user.entity';

import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
  constructor(private customerRepo: CustomerRepository) {}

  async createOrUpdate(condiction: any, data: any) {
    return await this.customerRepo.updateOneOrCreate(condiction, data);
  }

  async findByUid(uid: number) {
    return await this.customerRepo.findOne({ uid });
  }

  async findAll() {
    return await this.customerRepo.findAll();
  }
}

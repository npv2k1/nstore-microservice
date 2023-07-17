import { Injectable, Query, UseGuards } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { GqlAuthGuard } from '@/common/guards';
import { UserEntity } from '@/common/decorators';
import { User } from '../user/entities/user.entity';

@Injectable()
export class CustomerService {
  constructor(private customerRepo: CustomerRepository) {}

  async createOrUpdate(condiction: any, data: any) {
    return await this.customerRepo.updateOneOrCreate(condiction, data);
  }

  async findByUid(uid: number) {
    return await this.customerRepo.findOne({ uid });
  }
}

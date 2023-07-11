import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async createOrUpdate(condiction: any, data: any) {
    return await this.userRepo.updateOneOrCreate(condiction, data);
  }
}

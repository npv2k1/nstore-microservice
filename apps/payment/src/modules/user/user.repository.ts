import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@/common/mongoose/mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserRepository
  extends BaseRepository<UserDocument>
  implements OnApplicationBootstrap
{
  constructor(@InjectModel(User.name) model: Model<UserDocument>) {
    super(model);
  }

  async onApplicationBootstrap() {
    await this.createCollection();
  }
}

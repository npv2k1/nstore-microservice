import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateStorageInput } from './dto/create-storage.input';
import { UpdateStorageInput } from './dto/update-storage.input';
import { Storage } from './entities/storage.entity';
import { StorageService } from './storage.service';

@Resolver(() => Storage)
export class StorageResolver {
  constructor(private readonly storageService: StorageService) {}
}

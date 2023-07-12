import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StorageService } from './storage.service';
import { Storage } from './entities/storage.entity';
import { CreateStorageInput } from './dto/create-storage.input';
import { UpdateStorageInput } from './dto/update-storage.input';

@Resolver(() => Storage)
export class StorageResolver {
  constructor(private readonly storageService: StorageService) {}
}

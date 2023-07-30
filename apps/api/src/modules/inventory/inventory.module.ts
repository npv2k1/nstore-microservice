import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Inventory, InventorySchema } from './entities/inventory.entity';
import { InventoryController } from './inventory.controller';
import { InventoryRepository } from './inventory.repository';
import { InventoryResolver } from './inventory.resolver';
import { InventoryService } from './inventory.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Inventory.name, schema: InventorySchema }])],
  providers: [InventoryResolver, InventoryService, InventoryRepository],
  controllers: [InventoryController],
})
export class InventoryModule {}

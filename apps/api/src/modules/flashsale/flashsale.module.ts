import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlashSaleRepository } from './flashsale.repository';
import { FlashSaleResolver } from './flashsale.resolver';
import { FlashSaleService } from './flashsale.service';
import { FlashSale, FlashSaleSchema } from './entities/flashsale.entity';
import { EventBusModule } from '../event-bus/event-bus.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: FlashSale.name, schema: FlashSaleSchema }]), EventBusModule],
  providers: [FlashSaleResolver, FlashSaleService, FlashSaleRepository],
  exports: [FlashSaleService, FlashSaleRepository],
})
export class FlashSaleModule {}

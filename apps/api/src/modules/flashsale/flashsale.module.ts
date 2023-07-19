import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlashSaleRepository } from './flashsale.repository';
import { FlashSaleResolver } from './flashsale.resolver';
import { FlashSaleService } from './flashsale.service';
import { FlashSale, FlashSaleSchema } from './entities/flashsale.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: FlashSale.name, schema: FlashSaleSchema }])],
  providers: [FlashSaleResolver, FlashSaleService, FlashSaleRepository],
})
export class FlashSaleModule {}

import { Module } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ShipmentResolver } from './shipment.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Shipment, ShipmentSchema } from './entities/shipment.entity';
import { ShipmentRepository } from './shipment.repository';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [MongooseModule.forFeature([{ name: Shipment.name, schema: ShipmentSchema }])],
  providers: [ShipmentResolver, ShipmentService, ShipmentRepository],
})
export class ShipmentModule {}

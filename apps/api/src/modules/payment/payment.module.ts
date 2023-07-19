import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventBusModule } from '../event-bus/event-bus.module';
import { Payment, PaymentSchema } from './entities/payment.entity';
import { PaymentRepository } from './payment.repository';
import { PaymentResolver } from './payment.resolver';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]), EventBusModule],
  providers: [PaymentResolver, PaymentService, PaymentRepository],
  controllers: [PaymentController],
})
export class PaymentModule {}

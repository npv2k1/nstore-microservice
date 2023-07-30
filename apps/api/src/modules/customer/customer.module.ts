import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Customer, CustomerSchema } from './entities/customer.entity';
import { CustomerRepository } from './customer.repository';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }])],
  providers: [CustomerResolver, CustomerService, CustomerRepository],
  exports: [CustomerService],
})
export class CustomerModule {}

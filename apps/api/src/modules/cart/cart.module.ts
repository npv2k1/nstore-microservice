import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModule } from '../product/product.module';

import { Cart, CartSchema } from './entities/cart.entity';
import { CartRepository } from './cart.repository';
import { CartResolver } from './cart.resolver';
import { CartService } from './cart.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]), ProductModule],
  providers: [CartResolver, CartService, CartRepository],
  exports: [CartService],
})
export class CartModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from '../product/product.module';
import { CartRepository } from './cart.repository';
import { CartResolver } from './cart.resolver';
import { CartService } from './cart.service';
import { Cart, CartSchema } from './entities/cart.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]), ProductModule],
  providers: [CartResolver, CartService, CartRepository],
})
export class CartModule {}

import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { ClientProxy, Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

import { ProductService } from './product.service';
import { EventBusName } from '@/common/enums/event.enum';
import { Order } from '../order/entities/order.entity';
import { DeleteOneProductArgs } from './dtos/args/delete-product.args';
import { FindManyProductArgs, FindOneProductArgs } from './dtos/args/find-product.args';
import { InsertOneProductArgs } from './dtos/args/insert-product.args';
import { UpdateOneProductArgs } from './dtos/args/update-product.args';
import { Product } from './entities/product.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @MessagePattern(EventBusName.CREATE_ORDER_PRODUCT)
  async ping(@Payload() data: Order, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    data.items.forEach(async (item) => {
      await this.productService.reduceProductQuantity(item.product._id, item.quantity);
    });
    return 'Success';
  }

  @Post()
  async insertOne(@Body() args: InsertOneProductArgs): Promise<Product> {
    return await this.productService.insertOne(args);
  }

  @Get()
  async findMany(@Query() args: FindManyProductArgs): Promise<Product[]> {
    return await this.productService.findMany(args);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return await this.productService.findOne({
      query: {
        _id: id,
      },
    });
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() args: UpdateOneProductArgs['data']
  ): Promise<Product> {
    return await this.productService.updateOne({
      query: {
        _id: id,
      },
      data: args,
    });
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<Product> {
    return await this.productService.deleteOne({
      query: {
        _id: id,
      },
    });
  }
}

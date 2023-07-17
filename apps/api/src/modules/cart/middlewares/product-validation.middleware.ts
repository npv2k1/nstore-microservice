import { ProductService } from '@/modules/product/product.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';


@Injectable()
export class ProductValidationMiddleware implements NestMiddleware {
  constructor(private readonly productService: ProductService) {}

  async use(context: any, next: () => void) {
    const ctx = GqlExecutionContext.create(context);
    const { args } = ctx.getArgs();

    const productId = args.productId; // Assuming the product ID is in the arguments of the GraphQL query

    const productExists = await this.productService.findById(productId);

    if (productExists) {
      next(); // Proceed to the next middleware or resolver function
    } else {
      throw new Error('Product does not exist');
    }
  }
}

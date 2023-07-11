import { InputType, PartialType } from '@nestjs/graphql';
import { ProductInput } from './product.input';

@InputType()
export class ProductQueryInput extends PartialType(ProductInput) {}

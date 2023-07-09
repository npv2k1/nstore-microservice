import { InputType, PartialType } from '@nestjs/graphql';
import { ProductInsertInput } from './product-insert.input';

@InputType()
export class ProductUpdateInput extends PartialType(ProductInsertInput) {}

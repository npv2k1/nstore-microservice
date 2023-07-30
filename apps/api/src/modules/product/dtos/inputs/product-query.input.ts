import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Filter } from 'mongodb';

import { Product } from '../../entities/product.entity';

import { ProductInput } from './product.input';

@InputType()
export class ProductQueryInput extends PartialType(ProductInput) {
  @Field(() => [String], { nullable: true })
  categories_in?: string[];
}

export class ArrayQueryInput {}

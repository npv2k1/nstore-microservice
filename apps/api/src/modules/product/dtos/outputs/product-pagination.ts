import { Pagination } from '@/modules/common/entities/pagination.entity';
import { Field, ObjectType, createUnionType } from '@nestjs/graphql';
import { Product } from '../../entities/product.entity';

@ObjectType()
export class ProductPagination extends Pagination {
  @Field(() => [Product], {
    nullable: false,
  })
  docs: Product[];
}

export const ProductResultUnion = createUnionType({
  name: 'ProductResultUnion',
  types: () => [ProductPagination, Product] as const,
  resolveType(value) {
    console.log('value', value);
    if (value.docs) {
      return ProductPagination;
    }

    return Product

    return null;
  },
});

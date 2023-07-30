import { Field, ObjectType } from '@nestjs/graphql';

import { Pagination } from '@/modules/common/entities/pagination.entity';

import { Category } from '../../entities/category.entity';

@ObjectType()
export class CategoryPagination extends Pagination {
  @Field(() => [Category], {
    nullable: false,
  })
  docs: Category[];
}

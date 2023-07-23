import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
  // isAbstract: true,
})
export class Pagination {
  totalDocs: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page?: number | undefined;
  totalPages: number;

  @Field(() => Int, {
    nullable: true,
  })
  offset?: number;
  prevPage?: number | null | undefined;
  nextPage?: number | null | undefined;
  pagingCounter: number;
}

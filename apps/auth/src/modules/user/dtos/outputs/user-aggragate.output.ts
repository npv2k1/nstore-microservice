import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAggregate {
  @Field(() => Int, { nullable: true })
  _count!: number;
}

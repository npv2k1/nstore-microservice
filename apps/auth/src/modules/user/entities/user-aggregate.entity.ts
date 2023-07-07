import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class UserAggregate {
  @Field(() => Int, { nullable: true })
  _count!: number;
}
export { UserAggregate };

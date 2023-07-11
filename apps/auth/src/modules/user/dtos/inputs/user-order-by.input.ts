import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { SortOrder } from '@modules/common/dtos/inputs/filters/SortOrder';

@InputType({
  isAbstract: true,
  description: undefined,
})
class UserOrderByInput {
  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;
}
export { UserOrderByInput };

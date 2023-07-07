import { Type as NestjsType } from '@nestjs/common';
import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

/**
 * It creates a base class for a GraphQL query that takes a WhereInput and an optional OrderByInput.
 * @param WhereInputClass - NestjsType<WhereInput>
 * @param [OrderByInputClass] - This is the type of the orderBy input.
 * @returns A class that extends FindManyBase
 */
export function FindManyBaseArgs<WhereInput, OrderByInput>(
  WhereInputClass: NestjsType<WhereInput>,
  OrderByInputClass?: NestjsType<OrderByInput>
) {
  @ArgsType()
  abstract class FindManyBase {
    @ApiProperty({
      required: false,
      type: () => WhereInputClass,
    })
    @Field(() => WhereInputClass, { nullable: true })
    @Type(() => WhereInputClass)
    where?: WhereInput;

    @ApiProperty({
      required: false,
      type: Number,
    })
    @Field(() => Number, { nullable: true })
    skip?: number;

    @ApiProperty({
      required: false,
      type: Number,
    })
    @Field(() => Number, { nullable: true })
    take?: number;
  }
  if (OrderByInputClass) {
    // if OrderByInputClass is provided, then add the orderBy field to the base class
    @ArgsType()
    abstract class FindManyBaseWithOrderBy extends FindManyBase {
      @ApiProperty({
        required: false,
        type: [OrderByInputClass],
      })
      @Field(() => [OrderByInputClass], { nullable: true })
      orderBy?: Array<OrderByInput>;
    }
    // Return the extended class
    return FindManyBaseWithOrderBy;
  }

  // Return the base class
  return FindManyBase;
}

import { ArgsType, Field } from '@nestjs/graphql';
import { FlashSaleQueryInput } from '../inputs/flashsale-query.input';

@ArgsType()
export class FindManyFlashSaleArgs {
  @Field(() => FlashSaleQueryInput, { nullable: true })
  query?: FlashSaleQueryInput;
}

@ArgsType()
export class FindOneFlashSaleArgs {
  @Field(() => FlashSaleQueryInput, { nullable: false })
  query!: FlashSaleQueryInput;
}

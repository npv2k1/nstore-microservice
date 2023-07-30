import { ArgsType, Field } from '@nestjs/graphql';

import { FlashSaleInsertInput } from '../inputs/flashsale-insert.input';
import { FlashSaleQueryInput } from '../inputs/flashsale-query.input';

@ArgsType()
export class UpsertOneFlashSaleArgs {
  @Field(() => FlashSaleQueryInput, { nullable: true })
  query?: FlashSaleQueryInput;

  @Field(() => FlashSaleInsertInput, { nullable: false })
  data: FlashSaleInsertInput;
}

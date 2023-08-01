import { ArgsType, Field } from '@nestjs/graphql';

import { FlashSaleQueryInput } from '../inputs/flashsale-query.input';

@ArgsType()
export class DeleteManyFlashSaleArgs {
  @Field(() => FlashSaleQueryInput, { nullable: true })
  query?: FlashSaleQueryInput;
}
@ArgsType()
export class DeleteOneFlashSaleArgs {
  @Field(() => FlashSaleQueryInput, { nullable: false })
  query!: FlashSaleQueryInput;
}

import { ArgsType, Field } from '@nestjs/graphql';
import { FlashSaleQueryInput } from '../inputs/flashsale-query.input';
import { FlashSaleUpdateInput } from '../inputs/flashsale-update.input';

@ArgsType()
export class UpdateManyFlashSaleArgs {
  @Field(() => FlashSaleQueryInput, { nullable: true })
  query?: FlashSaleQueryInput;

  @Field(() => FlashSaleUpdateInput, { nullable: false })
  data!: FlashSaleUpdateInput;
}

@ArgsType()
export class UpdateOneFlashSaleArgs {
  @Field(() => FlashSaleQueryInput, { nullable: false })
  query!: FlashSaleQueryInput;

  @Field(() => FlashSaleUpdateInput, { nullable: false })
  data!: FlashSaleUpdateInput;
}

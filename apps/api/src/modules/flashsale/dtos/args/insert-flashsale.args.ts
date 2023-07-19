import { ArgsType, Field } from '@nestjs/graphql';
import { FlashSaleInsertInput } from '../inputs/flashsale-insert.input';

@ArgsType()
export class InsertManyFlashSaleArgs {
  @Field(() => [FlashSaleInsertInput], { nullable: false })
  data!: FlashSaleInsertInput[];
}

@ArgsType()
export class InsertOneFlashSaleArgs {
  @Field(() => FlashSaleInsertInput, { nullable: false })
  data!: FlashSaleInsertInput;
}

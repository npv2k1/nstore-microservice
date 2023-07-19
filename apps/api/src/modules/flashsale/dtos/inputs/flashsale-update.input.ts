import { InputType, PartialType } from '@nestjs/graphql';
import { FlashSaleInsertInput } from './flashsale-insert.input';

@InputType()
export class FlashSaleUpdateInput extends PartialType(FlashSaleInsertInput) {}

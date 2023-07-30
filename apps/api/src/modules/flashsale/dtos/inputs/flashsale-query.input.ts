import { InputType, PartialType } from '@nestjs/graphql';

import { FlashSaleInput } from './flashsale.input';

@InputType()
export class FlashSaleQueryInput extends PartialType(FlashSaleInput) {}

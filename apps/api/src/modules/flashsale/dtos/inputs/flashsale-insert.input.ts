import { InputType } from '@nestjs/graphql';

import { FlashSaleInput } from './flashsale.input';

@InputType()
export class FlashSaleInsertInput extends FlashSaleInput {}

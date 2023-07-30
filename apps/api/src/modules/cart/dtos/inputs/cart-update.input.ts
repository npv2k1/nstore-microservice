import { InputType, PartialType } from '@nestjs/graphql';

import { CartInsertInput } from './cart-insert.input';

@InputType()
export class CartUpdateInput extends PartialType(CartInsertInput) {}

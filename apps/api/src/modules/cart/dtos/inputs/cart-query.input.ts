import { InputType, PartialType } from '@nestjs/graphql';

import { CartInput } from './cart.input';

@InputType()
export class CartQueryInput extends PartialType(CartInput) {}

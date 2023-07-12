import { InputType } from '@nestjs/graphql';
import { CartInput } from './cart.input';

@InputType()
export class CartInsertInput extends CartInput {}

import { InputType } from '@nestjs/graphql';

import { ProductInput } from './product.input';

@InputType()
export class ProductInsertInput extends ProductInput {}

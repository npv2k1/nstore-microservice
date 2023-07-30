import { InputType } from '@nestjs/graphql';

import { OrderInput } from './order.input';

@InputType()
export class OrderInsertInput extends OrderInput {}

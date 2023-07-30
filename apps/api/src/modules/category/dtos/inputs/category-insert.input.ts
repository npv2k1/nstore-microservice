import { InputType } from '@nestjs/graphql';

import { CategoryInput } from './category.input';

@InputType()
export class CategoryInsertInput extends CategoryInput {}

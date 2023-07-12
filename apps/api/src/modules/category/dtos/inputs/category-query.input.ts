import { InputType, PartialType } from '@nestjs/graphql';
import { CategoryInput } from './category.input';

@InputType()
export class CategoryQueryInput extends PartialType(CategoryInput) {}

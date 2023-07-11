import { InputType, PartialType } from '@nestjs/graphql';
import { CategoryInsertInput } from './category-insert.input';

@InputType()
export class CategoryUpdateInput extends PartialType(CategoryInsertInput) {}

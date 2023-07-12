import { InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class CategoryInput {
  _id?: string;

  name?: string;
}

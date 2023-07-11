import { InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class ProductInput {
  _id?: string;

  name?: string;
}

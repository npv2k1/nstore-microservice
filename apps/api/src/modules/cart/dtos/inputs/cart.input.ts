import { InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class CartInput {
  _id?: string;

  name?: string;
}

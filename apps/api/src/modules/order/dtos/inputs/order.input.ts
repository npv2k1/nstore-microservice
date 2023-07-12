import { InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class OrderInput {
  _id?: string;

  name?: string;
}

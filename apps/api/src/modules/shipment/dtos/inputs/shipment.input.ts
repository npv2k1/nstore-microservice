import { InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class ShipmentInput {
  _id?: string;

  name?: string;
}

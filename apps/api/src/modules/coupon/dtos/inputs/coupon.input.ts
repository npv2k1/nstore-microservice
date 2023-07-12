import { InputType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class CouponInput {
  _id?: string;

  name?: string;
}

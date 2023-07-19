import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';

@InputType({
  isAbstract: true,
})
export class FlashSaleInput {
  @Field(() => String, {
    nullable: true,
  })
  _id?: string;

  @Field(() => Boolean, {
    nullable: false,
  })
  status: string;


  @Field(()=>String, {
    nullable:true
  })
  description?: string;

  @Field(() => Date, {
    nullable: false,
  })
  startDate: Date;

  @Field(() => Date, {
    nullable: false,
  })
  endDate: Date;


  @Field(() => Int, {
    nullable: false,
  })
  salePrice: number;

  @Field(() => String, {
    nullable: false,
  })
  product: string;
}

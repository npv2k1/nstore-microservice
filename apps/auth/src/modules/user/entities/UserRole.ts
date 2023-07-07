import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Role } from './Role';
import { User } from './User';

@ObjectType()
class UserRole {
  @Field(() => Int)
  id: number;
  @Field(() => Int)
  userId: number;
  @Field(() => String)
  roleName: string;

  
  Role?: Role;
  User?: User;
}

export { UserRole };

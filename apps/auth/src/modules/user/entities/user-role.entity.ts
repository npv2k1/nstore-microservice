import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Role } from '../../role/entities/role.entity';
import { User } from './user.entity';

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

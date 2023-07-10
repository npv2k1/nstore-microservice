import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';
import { InsertManyUserArgs, InsertOneUserArgs } from '../dtos/args/insert-user.args';
import { FindManyUserArgs, FindOneUserArgs } from '../dtos/args/find-user.args';
import { UserAggregateArgs } from '../dtos/args/user-aggregate.args';
import { UserAggregate } from '../entities/user-aggregate.entity';
import { UserRole } from '../entities/user-role.entity';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';

@Resolver(() => User)
export class UserResolver {
  constructor(protected readonly userService: UsersService) {}

  @Query(() => [User], {
    name: `${pluralize.plural(User.name.toLowerCase())}`,
  })
  async findMany(@Args() args: FindManyUserArgs) {
    return this.userService.findMany(args);
  }

  @Query(() => User, { name: User.name.toLowerCase() })
  async findOne(@Args() args: FindOneUserArgs) {
    return this.userService.findOne(args);
  }

  @Mutation(() => User, {
    name: `insertOne${pluralize.singular(User.name)}`,
  })
  async insertOne(@Args() args: InsertOneUserArgs) {
    return await this.userService.insertOne(args);
  }

  @Mutation(() => User, {
    name: `insertMany${pluralize.plural(User.name)}`,
  })
  async insertMany(@Args() args: InsertManyUserArgs) {
    return await this.userService.insertMany(args);
  }

  // @Mutation(() => User)
  // async updateUser(@Args() args: UpdateUserArgs) {
  //   // TODO: passowrd protection
  //   const roles = args.data.roles;
  //   delete args.data.roles;
  //   return this.userService.updateUser(args, roles);
  // }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.deleteUser({
      where: {
        id: Number(id),
      },
    });
  }

  // resolve fields

  @ResolveField(() => [UserRole], { nullable: true })
  async userRole(@Parent() parent: User): Promise<UserRole[]> {
    const result = await this.userService.getUserRole(parent.id);
    console.log(result);

    if (!result) {
      return [];
    }
    return result;
  }

  @ResolveField(() => [String], { nullable: true, name: 'roles' })
  async getRoles(@Parent() parent: User) {
    const result = await this.userService.getUserRole(parent.id);
    return result.map((role) => role.roleName);
  }

  @Query(() => UserAggregate, {
    name: 'User_aggregate',
  })
  async aggregate(@Args() args: UserAggregateArgs) {
    console.log(args);
    const result = await this.userService.aggregate({
      ...args,
      _count: true,
    });
    return result;
  }
}

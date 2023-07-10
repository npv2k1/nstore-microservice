import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as pluralize from 'pluralize';
import { InsertManyUserArgs, InsertOneUserArgs } from './dtos/args/insert-user.args';
import { FindManyUserArgs, FindOneUserArgs } from './dtos/args/find-user.args';
import { UserRole } from './entities/user-role.entity';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UpdateManyUserArgs, UpdateOneUserArgs } from './dtos/args/update-user.args';
import { DeleteManyUserArgs, DeleteOneUserArgs } from './dtos/args/delete-user.args';
import { AggregateUserArgs } from './dtos/args/aggregate-user.args';
import { UserAggregate } from './dtos/outputs/user-aggragate.output';

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

  @Mutation(() => User, {
    name: `updateOne${pluralize.singular(User.name)}`,
  })
  async updateOne(@Args() args: UpdateOneUserArgs) {
    return await this.userService.updateOne(args);
  }

  @Mutation(() => User, {
    name: `updateMany${pluralize.plural(User.name)}`,
  })
  async updateMany(@Args() args: UpdateManyUserArgs) {
    return await this.userService.updateMany(args);
  }

  @Mutation(() => User, {
    name: `deleteOne${pluralize.singular(User.name)}`,
  })
  async deleteOne(@Args() args: DeleteOneUserArgs) {
    return await this.userService.deleteOne(args);
  }

  @Mutation(() => User, {
    name: `deleteMany${pluralize.plural(User.name)}`,
  })
  async deleteMany(@Args() args: DeleteManyUserArgs) {
    return await this.userService.deleteMany(args);
  }

  @Query(() => UserAggregate, {
    name: `aggregate${pluralize.plural(User.name)}`,
  })
  async aggregate(@Args() args: AggregateUserArgs) {
    const result = await this.userService.aggregate(args);
    return result;
  }

  // @ResolveField(() => [UserRole], { nullable: true })
  // async userRole(@Parent() parent: User): Promise<UserRole[]> {
  //   const result = await this.userService.getUserRole(parent.id);
  //   if (!result) {
  //     return [];
  //   }
  //   return result;
  // }

  @ResolveField(() => [String], { nullable: true, name: 'roles' })
  async getRoles(@Parent() parent: User) {
    const result = await this.userService.getUserRole(parent.id);
    return result.map((role) => role.roleName);
  }
}

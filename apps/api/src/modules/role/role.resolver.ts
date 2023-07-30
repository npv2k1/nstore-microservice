import { Query, Resolver } from '@nestjs/graphql';

import { Role } from './entities/role.entity';
import { RoleService } from './role.service';
@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role], {
    name: 'Role',
  })
  async findMany() {
    return this.roleService.findMany();
  }
}

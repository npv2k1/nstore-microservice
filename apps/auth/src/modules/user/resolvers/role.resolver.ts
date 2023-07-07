import { Query, Resolver } from '@nestjs/graphql';
import { RoleService } from '../services/role.service';
import { Role } from '../entities/Role';
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

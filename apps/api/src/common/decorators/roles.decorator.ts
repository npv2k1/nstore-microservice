import { SetMetadata } from '@nestjs/common';
import { ROLE } from '../enums/role.enum';
export const ROLES_KEY = 'roles';

export const Roles = (...roles: string[] | [ROLE[]]) => SetMetadata(ROLES_KEY, roles);

import { RestAuthGuard } from './rest-jwt.guard';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RestRolesGuard extends RestAuthGuard {
  constructor(private reflector: Reflector) {
    super();
  }
  async canActivate(context: ExecutionContext) {
    await super.canActivate(context);
    const roles = this.reflector.getAllAndOverride<any[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) return true;
    const { user } = context.switchToHttp().getRequest();
    // console.log('user', user);
    return roles.some((role) => user.role === role);
  }
}

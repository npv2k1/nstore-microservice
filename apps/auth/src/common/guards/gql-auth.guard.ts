import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { AuthService } from '@modules/auth/auth.service';
import { intersection } from 'lodash';
@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector, private authService: AuthService) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
  async canActivate(context: ExecutionContext) {
    await super.canActivate(context);
    const roles = this.reflector.getAllAndOverride<any[]>('roles', [context.getHandler(), context.getClass()]);

    if (!roles) return true;
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const user = req.user;

    return intersection(roles, user.roles || []).length > 0;
  }
}

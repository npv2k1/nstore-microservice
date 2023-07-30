import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { ROLES_KEY } from 'src/common/decorators/roles.decorator';
import { AuthService } from 'src/modules/auth/auth.service';

@Injectable()
export class WsGuard implements CanActivate {
  constructor(private authService: AuthService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client: Socket = context.switchToWs().getClient<Socket>();
    const authToken: string = client.handshake.headers.authorization;

    if (!authToken) {
      client.emit('disconnected', new WsException('Unauthorized'));
      client.disconnect(true);
      return false;
    }
    const accessToken = authToken.split(' ')[1];
    const user = await this.authService.validateAccessToken(accessToken);
    // context.switchToHttp().getRequest().user = user;
    // const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);
    // if (!roles) return true;
    // const isAccess = roles.some((role) => user.role === role);
    // if (!isAccess) {
    //   client.emit('disconnected', new WsException('Not allowed'));
    //   client.disconnect(true);
    //   return false;
    // }
    // return true;
  }
}

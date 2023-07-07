import { UsersService } from '../services/users.service';
export class UserControllerBase {
  constructor(protected readonly service: UsersService) {}
}

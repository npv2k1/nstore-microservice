import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './services/users.service';

@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(protected service: UsersService) {}

  @Get(':id')
  async findUser(@Param('id') id: string) {
    return await this.service.findUser(id);
  }
}

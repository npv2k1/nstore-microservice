import {
  Controller,
  Get,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReqUser } from 'src/common/decorators/user.decorator';
import { JwtGuard } from 'src/common/guards';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBearerAuth()
  @Get('me')
  @UseGuards(JwtGuard)
  async me(@ReqUser() user: User) {
    return user;
  }
}

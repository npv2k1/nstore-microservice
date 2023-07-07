import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/prisma/prisma';
import { Response } from 'express';
import { ReqUser } from 'src/common/decorators/user.decorator';
import { GoogleOauthGuard, JwtGuard } from 'src/common/guards';
import { AuthService } from './auth.service';
import { LoginInput } from './dtos/inputs/LoginInput';
import { SignupInput } from './dtos/inputs/SignupInput';
import { Token } from './entities/Token';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // login
  @ApiResponse({
    type: [Token],
  })
  @Post('login')
  async login(@Body() loginInput: LoginInput) {
    const { accessToken, refreshToken } = await this.authService.login(loginInput);

    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('register')
  async signup(@Body() data: SignupInput) {
    const { accessToken, refreshToken } = await this.authService.createUser({
      ...data,
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  @ApiResponse({
    type: [Token],
  })
  @Post('refresh-token')
  async refreshToken(@Body() data: any) {
    return this.authService.refreshToken(data.token);
  }

  @ApiBearerAuth()
  @Get('me')
  @UseGuards(JwtGuard)
  async me(@ReqUser() user: User) {
    return user;
  }

  @Get('ping')
  async ping() {
    return 'pong';
  }

  @Get('google')
  @UseGuards(GoogleOauthGuard)
  async auth() {
    // function is empty because it's a guard
  }

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleAuthCallback(@Req() req, @Res() res: Response) {
    console.log(req.user);
    const { email } = req.user;
    const token = await this.authService.googleAuth(req.user);
    // TODO: add to env
    return res.redirect(`${process.env.FRONTEND_URL}/auth/login?accessToken=${token.accessToken}`);
  }
}

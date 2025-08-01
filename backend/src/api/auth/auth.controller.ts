import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SuccessAuthDto } from './dto/success-auth.dto';
import { REFRESH_COOKIE_KEY } from '@/shared/auth';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    status: 200,
    type: SuccessAuthDto,
  })
  async register(
    @Body() body: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<SuccessAuthDto> {
    const tokens = await this.authService.register(body);

    res.cookie(REFRESH_COOKIE_KEY, tokens.refreshToken, {
      httpOnly: true,
    });

    return {
      accessToken: tokens.accessToken,
    };
  }

  @Post('login')
  @ApiResponse({
    status: 200,
    type: SuccessAuthDto,
  })
  async login(
    @Body() body: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<SuccessAuthDto> {
    const tokens = await this.authService.login(body);

    res.cookie(REFRESH_COOKIE_KEY, tokens.refreshToken, {
      httpOnly: true,
    });

    return {
      accessToken: tokens.accessToken,
    };
  }
}

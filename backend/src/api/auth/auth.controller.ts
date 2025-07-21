import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticationDto } from './dto/authentication.dto';
import { SuccessAuthenticationDto } from './dto/success-authentication.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body: AuthenticationDto): Promise<SuccessAuthenticationDto> {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: AuthenticationDto): Promise<SuccessAuthenticationDto> {
    return this.authService.login(body);
  }
}

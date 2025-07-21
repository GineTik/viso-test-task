import { Injectable } from '@nestjs/common';
import { AuthenticationDto } from './dto/authentication.dto';
import { SuccessAuthenticationDto } from './dto/success-authentication.dto';

@Injectable()
export class AuthService {
  async register(dto: AuthenticationDto): Promise<SuccessAuthenticationDto> {
    return {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    };
  }

  async login(dto: AuthenticationDto): Promise<SuccessAuthenticationDto> {
    return {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    };
  }
}

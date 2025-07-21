import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth-payload.dto';
import { AuthTokensDto } from './dto/auth-tokens.dto';

const JWT_ACCESS_EXPIRATION_TIME = 'JWT_ACCESS_EXPIRATION_TIME';
const JWT_REFRESH_EXPIRATION_TIME = 'JWT_REFRESH_EXPIRATION_TIME';
const JWT_SECRET = 'JWT_SECRET';

@Injectable()
export class JwtService {
  constructor(
    private readonly nestJwtService: NestJwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateTokens(payload: AuthPayloadDto): Promise<AuthTokensDto> {
    const accessToken = await this.generateToken(
      payload,
      JWT_SECRET,
      JWT_ACCESS_EXPIRATION_TIME,
    );
    const refreshToken = await this.generateToken(
      payload,
      JWT_SECRET,
      JWT_REFRESH_EXPIRATION_TIME,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  private async generateToken(
    payload: AuthPayloadDto,
    secretKey: string,
    expiresInKey: string,
  ): Promise<string> {
    const secret = this.configService.get<string>(secretKey);
    const expiresIn = this.configService.get<string>(expiresInKey);

    const token = await this.nestJwtService.signAsync(payload, {
      secret,
      expiresIn,
    });

    return token;
  }
}

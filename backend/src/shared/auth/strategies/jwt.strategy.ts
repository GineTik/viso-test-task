import { ConfigService } from '@nestjs/config';
import { ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService, User } from '@/shared/prisma';
import { ERROR_CODES as AUTH_ERROR_CODES, AUTH_PROVIDERS } from '@/shared/auth';
import { AuthPayloadDto } from '../dto/auth-payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  AUTH_PROVIDERS.JWT_STRATEGY,
) {
  constructor(
    private readonly prisma: PrismaService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET') || 'secret',
      ignoreExpiration: false,
    });
  }

  async validate(payload: AuthPayloadDto): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!user) {
      throw new UnauthorizedException(AUTH_ERROR_CODES.USER_NOT_FOUND);
    }

    return user;
  }
}

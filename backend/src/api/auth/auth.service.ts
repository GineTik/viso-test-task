import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { AuthTokensDto, ERROR_CODES, JwtService } from '@/shared/auth';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authRepository: AuthRepository,
  ) {}

  async register(dto: AuthDto): Promise<AuthTokensDto> {
    const existingUser = await this.authRepository.getExistingUserByEmail(
      dto.email,
    );

    if (existingUser) {
      throw new ConflictException(ERROR_CODES.USER_ALREADY_EXISTS);
    }

    const user = await this.authRepository.createUser(dto.email, dto.password);

    return await this.jwtService.generateTokens({
      userId: user.id,
      email: user.email,
    });
  }

  async login(dto: AuthDto): Promise<AuthTokensDto> {
    const user = await this.authRepository.getExistingUserByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException(ERROR_CODES.USER_NOT_FOUND);
    }

    await this.throwIfPasswordIsInvalid(dto.password, user.passwordHash);

    return await this.jwtService.generateTokens({
      userId: user.id,
      email: user.email,
    });
  }

  async throwIfPasswordIsInvalid(password: string, passwordHash: string) {
    const isPasswordValid = await bcrypt.compare(password, passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException(ERROR_CODES.USER_NOT_FOUND);
    }
  }
}

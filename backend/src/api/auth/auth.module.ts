import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthModule as SharedAuthModule } from '@/shared/auth';
import { PrismaModule } from '@/shared/prisma';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [SharedAuthModule, PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}

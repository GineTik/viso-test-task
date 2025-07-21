import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtService } from './jwt.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma';

@Module({
  imports: [
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME },
    }),
    PrismaModule,
  ],
  providers: [JwtStrategy, JwtService],
  exports: [JwtStrategy, JwtService],
})
export class AuthModule {}

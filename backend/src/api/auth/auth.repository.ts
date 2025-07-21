import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/prisma';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getExistingUserByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(email: string, password: string) {
    return await this.prisma.user.create({
      data: { email, passwordHash: await bcrypt.hash(password, SALT_ROUNDS) },
    });
  }
}

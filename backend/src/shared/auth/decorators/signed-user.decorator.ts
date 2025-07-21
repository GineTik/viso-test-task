import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@/shared/prisma';

export const SignedUser = createParamDecorator(
  (_, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest<Request & { user: User }>();
    return request.user;
  },
);

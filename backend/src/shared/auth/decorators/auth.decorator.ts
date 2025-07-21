import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AUTH_PROVIDERS } from '../auth.constants';

export function Auth() {
  return applyDecorators(UseGuards(AuthGuard(AUTH_PROVIDERS.JWT_STRATEGY)));
}

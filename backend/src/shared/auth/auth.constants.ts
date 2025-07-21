export const AUTH_PROVIDERS = {
  JWT_STRATEGY: 'jwt',
} as const;

export type AuthProvider = (typeof AUTH_PROVIDERS)[keyof typeof AUTH_PROVIDERS];

export const ERROR_CODES = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  USER_HAS_NO_PERMISSION: 'USER_HAS_NO_PERMISSION',
} as const;

export const ACCESS_COOKIE_KEY = 'access_token_jwt';

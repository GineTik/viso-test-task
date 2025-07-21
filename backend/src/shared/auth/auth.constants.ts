export const AUTH_PROVIDERS = {
  JWT_STRATEGY: 'jwt',
} as const;

export type AuthProvider = (typeof AUTH_PROVIDERS)[keyof typeof AUTH_PROVIDERS];

export const ERROR_CODES = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
} as const;

export const ACCESS_COOKIE_KEY = 'access_token_jwt';
export const REFRESH_COOKIE_KEY = 'refresh_token_jwt';

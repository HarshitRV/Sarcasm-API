import { ObjectValues } from '../sarcasm-app/utils/type.utils.js';

export const ERROR_TYPES = {
    404: 'Not Found',
    400: 'Bad Request',
    401: 'Unauthorized',
} as const;

export const ERROR_CODES = {
    AUTH_TOKEN_EXPIRED: 'auth.token.expired',
    AUTH_TOKEN_NOT_FOUND: 'auth.token.not.found',
    DUPLICATE_SARCASM: 'duplicate.sarcasm',
    USER_NOT_FOUND: 'user.not.found',
    INCORRECT_CREDENTIALS: 'incorrect.credentials',
    DUPLICATE_USER: 'duplicate.user',
    BAD_REQUEST: 'bad.request',
    NOT_FOUND: 'not.found',
    INTERNAL_SERVER_ERROR: 'internal.server.error',
    MISSING_REQUIRED_ROLE: 'missing.required.role',
} as const;

export type ErrorTypes = ObjectValues<typeof ERROR_TYPES>;
export type ErrorCodes = ObjectValues<typeof ERROR_CODES>;

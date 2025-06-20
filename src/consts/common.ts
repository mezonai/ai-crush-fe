const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
} as const;

export type GenderType = (typeof GENDER)[keyof typeof GENDER];
const TOKENS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const;

export { GENDER, TOKENS };

export const GAME_MODE = {
  SOLO: 'solo',
  BETTING: 'betting',
} as const;

export type GameMode = (typeof GAME_MODE)[keyof typeof GAME_MODE] | null;

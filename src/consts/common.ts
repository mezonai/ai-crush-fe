const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
} as const;

const TOKENS = {
  ACCESS_TOKEN: 'aicrush-access-token',
  REFRESH_TOKEN: 'aicrush-refresh-token',
} as const;

export {
  GENDER,
  TOKENS
}
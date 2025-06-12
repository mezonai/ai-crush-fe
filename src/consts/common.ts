const GENDER = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other',
} as const;

export type GenderType = (typeof GENDER)[keyof typeof GENDER];

export {
    GENDER,
}
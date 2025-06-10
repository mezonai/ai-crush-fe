export const USER_GENDER = {
	MALE: 1,
	FEMALE: 2
} as const;
export type USER_GENDER = typeof USER_GENDER[keyof typeof USER_GENDER];

export const USER_TYPE = {
	INTERNSHIP: 0,
	COLLABORATORS: 1,
	STAFF: 2,
	PROBATIONARY_STAFF: 3,
	VENDOR: 5
} as const;
export type USER_TYPE = typeof USER_TYPE[keyof typeof USER_TYPE];

export const USER_STATUS = {
	WORKING: 1,
	PAUSING: 2,
	QUIT: 3,
	MATERNITY_LEAVE: 4
} as const;
export type USER_STATUS = typeof USER_STATUS[keyof typeof USER_STATUS];

export const USER_MESSAGE = {
	CROP_AVATAR_FAIL: 'Image size is limited at 5MB, please choose a different image or continue to crop your image to reduce the file size'
} as const;
export type USER_MESSAGE = typeof USER_MESSAGE[keyof typeof USER_MESSAGE];

export const ALLOWED_FILE_SIZE = {
	AVATAR: 5
} as const;
export type ALLOWED_FILE_SIZE = typeof ALLOWED_FILE_SIZE[keyof typeof ALLOWED_FILE_SIZE];
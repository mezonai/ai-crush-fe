import type { ISODateString, TokenBalance, UserFavorite } from './common';

type AppError = {
  message: string;
  code?: string;
};

export type ResultResponse<T = null> = {
  data?: T;
  error?: AppError;
};

export type CreateUserResponseDto = {
  accessToken: string;
  refreshToken: string;
};

export type GetUserFavoritesResponse = {
  favorites: UserFavorite[];
  email: string;
  tokenBalance: TokenBalance;
  userName: string;
  gender: string;
  createdAt: ISODateString;
};

export type CheckUserExistResponse = {
  isExist: boolean;
};

export type LoginMezonResponse = {
  accessToken: string;
  refreshToken: string;
};

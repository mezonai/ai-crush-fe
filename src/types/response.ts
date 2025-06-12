import type { ISODateString, TokenBalance } from "./common";

type AppError = {
  message: string;
  code?: string;
};

export type ResultResponse<T = null> = {
  data?: T;
  error?: AppError;
}

export type GetUserInformationResponse = {
    email: string;
    tokenBalance: TokenBalance;
    userName: string;
    gender: string;
    createdAt: ISODateString;
}

export type GetUserFavoritesResponse = {
    favorites: {
        id: number;
        value: string;
    }[];
}
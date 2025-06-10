import type { ISODateString, TokenBalance } from "./common";

export type GetUserInformationResponse = {
    email: string;
    tokenBalance: TokenBalance;
    userName: string;
    gender: string;
    createdAt: ISODateString;
}

export type CheckUserExistResponse = {
    isExist: boolean;
}
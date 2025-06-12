import type { AxiosResponse } from "axios"
import axiosHttp from "../config/axios"
import type { GetUserFavoritesResponse, GetUserInformationResponse, ResultResponse } from "../types/response"
import type { CreateUserRequest } from "@/types/request"

const getUsersDetail = async (userId: string): Promise<AxiosResponse<GetUserInformationResponse>> => {
    return await axiosHttp.get<GetUserInformationResponse>(`/users/${userId}`)
}

const getUserFavorites = async (): Promise<ResultResponse<GetUserFavoritesResponse>> => {
    return (await axiosHttp.get<ResultResponse<GetUserFavoritesResponse>>(`/users/favorites`)).data;
}

const createUser = async(createUserRequest: CreateUserRequest): Promise<AxiosResponse<GetUserInformationResponse>> => {
    return await axiosHttp.post<GetUserInformationResponse>(`/users`, createUserRequest);
}

export {
    getUsersDetail,
    getUserFavorites,
    createUser
}
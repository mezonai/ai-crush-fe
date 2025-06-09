import type { AxiosResponse } from "axios"
import axiosHttp from "../config/axios"
import type { GetUserInformationResponse } from "../types/response"

const getUsersDetail = async (userId: string): Promise<AxiosResponse<GetUserInformationResponse>> => {
    return await axiosHttp.get<GetUserInformationResponse>(`/users/${userId}`)
}

export {
    getUsersDetail
}
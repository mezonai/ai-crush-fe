import type { AxiosResponse } from "axios"
import axiosHttp from "../config/axios"
import type { CheckUserExistResponse, GetUserInformationResponse, LoginMezonResponse } from "../types/response"
import type { LoginMezonRequest } from "../types/request"

const getUsersDetail = async (userId: string): Promise<AxiosResponse<GetUserInformationResponse>> => {
  return await axiosHttp.get<GetUserInformationResponse>(`/user/${userId}`)
}

const checkUserExists = async (userId: string): Promise<AxiosResponse<CheckUserExistResponse>> => {
  return await axiosHttp.get<CheckUserExistResponse>(`/user/exist/${userId}`);
}

const isUserExists = async (userId: string): Promise<boolean> => {
  try {
    const response = await checkUserExists(userId);
    return response.data.isExist;
  } catch (error) {
    return false;
  }
}

const loginMezon = async (data: LoginMezonRequest): Promise<AxiosResponse<LoginMezonResponse>> => {
  return await axiosHttp.post<LoginMezonResponse>(`/auth/login-mezon`, data);
}

export {
  getUsersDetail,
  isUserExists,
  loginMezon
}
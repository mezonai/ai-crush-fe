import type { AxiosResponse } from "axios"
import axiosHttp from "../config/axios"
import type { CheckUserExistResponse, GetUserInformationResponse } from "../types/response"

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

const loginWithWebAppData = async (web_app_data: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve(web_app_data); // Simulate successful login with web app data
  })
}

export {
  getUsersDetail,
  isUserExists,
  loginWithWebAppData
}
import type { AxiosResponse } from "axios"
import axiosHttp from "../config/axios"
import type { CheckUserExistResponse, GetUserInformationResponse } from "../types/response"
import type { CheckUserExistRequest } from "../types/request"

const getUsersDetail = async (userId: string): Promise<AxiosResponse<GetUserInformationResponse>> => {
  return await axiosHttp.get<GetUserInformationResponse>(`/users/${userId}`)
}

const checkUserExists = async (userId: string): Promise<AxiosResponse<CheckUserExistResponse>> => {
  return await axiosHttp.get<CheckUserExistResponse>(`/users/${userId}/exist`);
}

const isUserExists = async (request: CheckUserExistRequest): Promise<boolean> => {
  try {
    const response = await checkUserExists(request.userId);
    return response.data.isExist;
  } catch (error) {
    console.error("Error checking user existence:", error);
    return false;
  }
}

export {
  getUsersDetail,
  isUserExists
}
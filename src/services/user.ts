import type { AxiosResponse } from 'axios';
import axiosHttp from '../config/axios';
import type {
  GetUserFavoritesResponse,
  ResultResponse,
  CheckUserExistResponse,
  GetUserInformationResponse,
  LoginMezonResponse,
} from '../types/response';
import type { CreateUserRequest, LoginMezonRequest } from '@/types/request';

const getUsersDetail = async (
  userId: string
): Promise<AxiosResponse<GetUserInformationResponse>> => {
  return await axiosHttp.get<GetUserInformationResponse>(`/user/${userId}`);
};

const checkUserExists = async (
  userId: string
): Promise<AxiosResponse<CheckUserExistResponse>> => {
  return await axiosHttp.get<CheckUserExistResponse>(`/user/exist/${userId}`);
};

const isUserExists = async (userId: string): Promise<boolean> => {
  try {
    const response = await checkUserExists(userId);
    return response.data.isExist;
  } catch (error) {
    return false;
  }
};

const loginMezon = async (
  data: LoginMezonRequest
): Promise<AxiosResponse<LoginMezonResponse>> => {
  return await axiosHttp.post<LoginMezonResponse>(`/auth/login-mezon`, data);
};

const getUserFavorites = async (): Promise<
  ResultResponse<GetUserFavoritesResponse>
> => {
  return (
    await axiosHttp.get<ResultResponse<GetUserFavoritesResponse>>(
      `/users/favorites`
    )
  ).data;
};

const createUser = async (
  createUserRequest: CreateUserRequest
): Promise<AxiosResponse<GetUserInformationResponse>> => {
  return await axiosHttp.post<GetUserInformationResponse>(
    `/users`,
    createUserRequest
  );
};

export {
  getUsersDetail,
  getUserFavorites,
  createUser,
  isUserExists,
  loginMezon,
};

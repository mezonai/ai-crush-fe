import axiosHttp from '../config/axios';
import type {
  GetUserFavoritesResponse,
  ResultResponse,
  CheckUserExistResponse,
  CreateUserResponseDto,
  LoginMezonResponse,
} from '../types/response';
import type { CreateUserRequest, LoginMezonRequest } from '@/types/request';


const checkUserExists = async (
  userId: string
): Promise<ResultResponse<CheckUserExistResponse>> => {
  return (
    await axiosHttp.get<ResultResponse<CheckUserExistResponse>>(
      `/user/exist/${userId}`
    )
  ).data;
};

const isUserExists = async (userId: string): Promise<boolean | undefined> => {
  try {
    const response = await checkUserExists(userId);
    return response.data?.isExist;
  } catch (error) {
    return false;
  }
};

const loginMezon = async (
  data: LoginMezonRequest
): Promise<ResultResponse<LoginMezonResponse>> => {
  return (
    await axiosHttp.post<ResultResponse<LoginMezonResponse>>(
      `/auth/login-mezon`,
      data
    )
  ).data;
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
): Promise<ResultResponse<CreateUserResponseDto>> => {
  return (await axiosHttp.post<ResultResponse<CreateUserResponseDto>>(
    `/users`,
    createUserRequest
  )).data;
};

export {
  getUserFavorites,
  createUser,
  isUserExists,
  loginMezon,
};

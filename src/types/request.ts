//===========================Auth===========================//
export type LoginMezonRequest = {
  web_app_data: string;
};

//===========================User===========================//
export type UpdateUserInformationRequest = {
  userName: string;
  gender: string;
};

export interface CheckUserExistRequest {
  userId: string;
}

export type CreateUserRequest = {
  userName: string;
  email: string;
  avatarUrl: string;
  identityId: string;
  age: number;
  gender: string;
  webAppData: string;
  favorites: string;
  description: string;
};

//===========================Betting Room===========================//

//===========================Characters===========================//

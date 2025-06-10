import type { USER_GENDER, USER_STATUS, USER_TYPE } from "../enums/users"

export interface IUserLogin {
  googleAuthToken: string
}

export type IOAuth2Login = {
  code: string
  scope?: string | string[] | undefined | null
  state?: string
}

export interface IMezonAppLogin {
  web_app_data: string
}

export type IMezonAppUserInfo = {
  email: string
  mezon_id: string
  user: {
    avatar_url: string
    create_time: string
    display_name: string
    dob: string
    edge_count: number
    google_id: string
    id: string
    lang_tag: string
    metadata: string
    online: boolean
    update_time: string
    username: string
  }
  wallet: string
}

export type IMezonAppUserHashInfo = {
  message: {
    web_app_data: string
  }
}

export interface DataUserInfo {
  creationTime: Date
  emailAddress: string
  surname: string
  name: string
  isActive: boolean
  userName: string
  password?: string
  confirmPassword?: string
}

export interface DataUserId {
  id: number
}

export interface IUsersRes {
  data: DataUser[]
  hasNextPage: boolean
  hasPreviousPage: boolean
  itemCount: number
  page: number
  pageCount: number
  size: number
}

export type DataUser = IUserProfileRes

export interface DataUserForm {
  id?: number
  emailAddress: string
  isActive: boolean
  name: string
  password?: string
  confirmPassword?: string
  surname: string
  userName: string
}

export interface DataUserChecked {
  name: string
  value: number
  isChecked: boolean
}

export interface DataUserTab {
  name: string
  value: string
}

export type DataUserName =
  | "name"
  | "id"
  | "emailAddress"
  | "isActive"
  | "password"
  | "confirmPassword"
  | "surname"
  | "userName"

export interface DataUserFilters {
  search: string
}

export const UserTabsEnum = {
  USER_DETAILS: "1",
  USER_ROLES: "2"
} as const;
export type UserTabsEnum = typeof UserTabsEnum[keyof typeof UserTabsEnum];

export const UserRolesEnum = {
  ADMIN: 1,
  HR: 2,
  CEO: 3,
  INTERN: 4,
  EMPLOYEE: 5,
  PM: 6,
  ROLE_CHECK: 7,
  ROLE_TEST: 8,
  ROLE_FIND: 9,
  ROLE_NAME: 10
} as const;
export type UserRolesEnum = typeof UserRolesEnum[keyof typeof UserRolesEnum];

export const UserSelectActive = {
  ALL: "All",
  ACTIVE: "Active",
  NO_ACTIVE: "No Active"
} as const;
export type UserSelectActive = typeof UserSelectActive[keyof typeof UserSelectActive];

export interface ILoginGoogle {
  accessToken: string
  refreshToken: string
}

export interface ILoginOauth2 {
  accessToken: string
  refreshToken: string
}

export interface ILoginMezonAppRes {
  accessToken: string
  refreshToken: string
}

export const USER_ROLES_NAME = {
  ADMIN: "Admin",
  HR: "HR",
  STAFF: "Staff",
  INTERN: "Intern"
} as const;
export type USER_ROLES_NAME = typeof USER_ROLES_NAME[keyof typeof USER_ROLES_NAME];

export interface UserRoles {
  id: UserRolesEnum
  name: USER_ROLES_NAME
}

export interface IUserProfileRes {
  id: number
  createdBy: string
  createdTime: string
  updatedBy: string
  updatedTime: string
  deletedBy: number
  deletedTime: string
  isDeleted: boolean
  userName: string
  emailAddress: string
  name: string
  surname: string
  phoneNumber: string
  avatar: string
  komuUserName: string
  mezonId: string | null
  userCode: number
  roles: UserRoles[]
  iat: number
  exp: number
}

export interface IUserProfileUpdate {
  id: number
  mezonId?: string | null
}

export interface IUserInformationSelector {
  id: number
  name: string
  surname: string
  avatar: string
}

export interface IUserRole {
  id: number
  name: USER_ROLES_NAME
}

interface IFullPermissions {
  create: boolean
  update: boolean
  read: boolean
  delete: boolean
}

export interface IUserRolePermissions {
  timesheet: IFullPermissions
  hrm: IFullPermissions
  authorization: IFullPermissions
  cms: IFullPermissions
  album: IFullPermissions
  comment: IFullPermissions
  like: IFullPermissions
  widget: IFullPermissions & {
    manage: boolean
  }
  setting: Pick<IFullPermissions, "read" | "update">
  upload_file: Omit<IFullPermissions, "update">
}
export interface IEditCheckBoxUserRolePermissions {
  name: string
  value: boolean
}

export interface IUpdateUserRolePermissions {
  rolePermissions: IUserRolePermissions
  name: string
}

export interface IUpdateUserRole {
  userId: number
  roleNames: USER_ROLES_NAME[]
}

export interface IUserInfo {
  address: string
  bank: string
  bankAccountNumber: string
  bankId: string
  birthday: string
  branch: string
  email: string
  fullName: string
  idCard: string
  insuranceStatus: number
  insuranceStatusName: string
  issuedBy: string
  issuedOn: Date
  jobPosition: string
  level: string
  phone: string
  placeOfPermanent: string
  placeOfResident?: string
  remainLeaveDay: number
  sex: USER_GENDER
  skillNames: string[]
  status: USER_STATUS
  userType: USER_TYPE
  taxCode: string
  teamIds: number[]
  teams: string[]
  statusName: string
  usertypeName: string
}

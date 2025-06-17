export type TokenBalance = string;
export type ISODateString = string;

export type IMezonAppUserInfo = {
  email: string;
  mezon_id: string;
  user: {
    avatar_url: string;
    create_time: string;
    display_name: string;
    dob: string;
    edge_count: number;
    google_id: string;
    id: string;
    lang_tag: string;
    metadata: string;
    online: boolean;
    update_time: string;
    username: string;
  };
  wallet: string;
};

export type IMezonAppUserHashInfo = {
  message: {
    web_app_data: string;
  };
};

export type UserFavorite = {
  id: number;
  value: string;
};

export type UserDetail = {
  age: number;
  email: string;
  favorites: UserFavorite[];
  gameTurnLastUsed: string | null;
  gameTurns: number;
  gender: string | null;
  id: string;
  language: string | null;
  tokenBalance: string;
  userName: string;
  avatarUrl: string;
};

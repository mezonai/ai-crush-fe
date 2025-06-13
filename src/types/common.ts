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

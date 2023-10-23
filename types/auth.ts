export type AuthInfo = {
  islogin: boolean;
  accessToken: string;
  nickname: string;
};

export type RootState = {
  authInfo: AuthInfo;
};

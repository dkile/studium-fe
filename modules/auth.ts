import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthInfo, RootState } from "@/types/auth";

const initialState: AuthInfo = {
  islogin: false,
  accessToken: "aaa",
  nickname: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.islogin = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
  },
});

export const { setIsLogin, setAccessToken, setNickname } = authSlice.actions;

export const selectAuthInfo = (state: RootState) => state.authInfo;
export default authSlice.reducer;

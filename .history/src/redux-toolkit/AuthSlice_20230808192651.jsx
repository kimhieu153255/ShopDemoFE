import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: Cookies.get("token") || null,
    user: JSON.parse(Cookies.get("user")?.toString() || null),
    storeId: Cookies.get("storeId") || null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        storeId: action.payload.storeId,
      };
    },
    logout: (state) => ({
      ...state,
      token: null,
      user: null,
      storeId: null,
    }),
    setStoreId: (state, action) => ({
      ...state,
      storeId: action.payload.storeId,
    }),
    clean: (state) => ({
      ...state,
      token: null,
      user: null,
      storeId: null,
    }),
  },
});

export const { login, logout, setStoreId } = AuthSlice.actions;
export default AuthSlice.reducer;

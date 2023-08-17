import { ConfigureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const store = ConfigureStore({
  reducer: {
    auth: AuthSlice,
  },
});

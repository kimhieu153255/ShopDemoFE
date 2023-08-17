import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const reducer = combineReducers({
  auth: AuthSlice,
});

const store = configureStore({
  reducer,
});

export default store;

import { CreateSlice, configureStore } from "@reduxjs/toolkit";

const AuthSlice = CreateSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,


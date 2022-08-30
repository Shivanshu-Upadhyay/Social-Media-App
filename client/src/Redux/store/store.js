import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slice/postSlice";
import authReducer from '../slice/authSlice'

export const store = configureStore({
  reducer: {
    postReducer,
    authReducer
  },
});

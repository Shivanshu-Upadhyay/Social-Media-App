import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slice/postSlice";

export const store = configureStore({
  reducer: {
    postReducer,
  },
});

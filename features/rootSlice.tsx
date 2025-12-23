import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { userApi } from "../services/userApi";
import { profileApi } from "@/services/profileApi";
import { blogApi } from "@/services/blogApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
});

export default rootReducer;

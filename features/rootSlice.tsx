import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { userApi } from "../services/userApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;

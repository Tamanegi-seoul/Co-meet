import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/user/user";
import { combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import postReducer from "../store/post/post";
import axios from "axios";
import { getCookie } from "../utils/setCookie";

if (getCookie("accessToken")) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
    "accessToken"
  )}`;
}

const reducers = combineReducers({
  user: userReducer,
  post: postReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          // "login/fulfilled",
        ],
      },
    }),
});

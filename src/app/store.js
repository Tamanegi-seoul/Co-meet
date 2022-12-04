import { configureStore } from "@reduxjs/toolkit";
import stackReducer, { stackSlice } from "../store/stack/stack";
import { userSlice } from "../store/user/user";
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
import { postSlice } from "../store/post/post";

const reducers = combineReducers({
  user: userSlice.reducer,
  stack: stackSlice.reducer,
  post: postSlice.reducer,
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
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      // }).concat(logger),
    }),
});

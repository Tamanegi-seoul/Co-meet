import { configureStore } from "@reduxjs/toolkit";
import stackReducer from "../store/stack";
export const store = configureStore({
  reducer: { stack: stackReducer },
  devTools: process.env.NODE_ENV !== "production",
});

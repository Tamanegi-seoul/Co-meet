import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userApi";

const initialState = {};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
});

export default postSlice.reducer;

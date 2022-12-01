import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "../post/postAPI";

const initialState = {};

export const loadPostListAsync = createAsyncThunk("loadPostList", async () => {
  const response = await fetchPost();
  console.log();
  return;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(loadPostListAsync.pending, state => {})
      .addCase(loadPostListAsync.fulfilled, (state, action) => {})
      .addCase(loadPostListAsync.rejected, state => {});
  },
});

export default postSlice.reducer;

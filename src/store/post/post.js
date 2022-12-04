import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMorePost, fetchPost } from "../post/postAPI";

const initialState = {
  post: {},
  postList: [],
  FistPostListLoading: false,
  FistPostListDone: false,
  FistPostListError: null,

  MorePostListLoading: false,
  MorePostListDone: false,
  MorePostListError: null,
};

export const loadPostListAsync = createAsyncThunk("loadPostList", async () => {
  const response = await fetchPost();
  return response.data;
});

export const loadMorePostListAsync = createAsyncThunk(
  "loadMorePostList",
  async () => {
    const response = await fetchMorePost();
    return response.data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(loadPostListAsync.pending, state => {
        state.FistPostListLoading = true;
        state.FistPostListDone = false;
      })
      .addCase(loadPostListAsync.fulfilled, (state, action) => {
        state.postList = action.payload;
        state.FistPostListLoading = false;
        state.FistPostListDone = true;
      })
      .addCase(loadPostListAsync.rejected, state => {
        state.FistPostListLoading = false;
        state.FistPostListDone = false;
      })

      .addCase(loadMorePostListAsync.pending, state => {
        state.MorePostListLoading = true;
        state.MorePostListDone = false;
      })
      .addCase(loadMorePostListAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.postList.data = state.postList.data.concat(action.payload);
        state.MorePostListLoading = false;
        state.MorePostListDone = true;
      })
      .addCase(loadMorePostListAsync.rejected, state => {
        state.MorePostListLoading = false;
        state.MorePostListDone = false;
      });
  },
});

export default postSlice.reducer;

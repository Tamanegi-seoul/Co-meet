import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postListRefresh from "../../utils/postListRefresh";
import { fetchPost, fetchViewPostDetail } from "../post/postAPI";

const initialState = {
  post: {},
  postListData: [],
  postListShow: [],
  stackList: [],
  postOffset: 0,

  MorePostListLoading: false,
};

export const loadPostListAsync = createAsyncThunk(
  "loadPostList",
  async (arg, { getState }) => {
    const state = getState();
    const offset = state.post.postOffset;
    return await fetchPost(offset).then(res => {
      return res.data;
    });
  }
);

export const loadMorePostListAsync = createAsyncThunk(
  "loadMorePostList",
  async (arg, { getState }) => {
    const state = getState();
    const offset = state.post.postOffset;
    return await fetchPost(offset).then(res => {
      return res.data.data;
    });
  }
);

export const viewPostDetailAsync = createAsyncThunk(
  "viewPostDetailAsync",
  async postId => {
    const response = await fetchViewPostDetail(postId);
    return response.data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addStack: (state, action) => {
      state.stackList.unshift(action.payload.stack);
      state.postListShow = postListRefresh(
        state.postListShow,
        state.postListData,
        state.stackList
      );
    },
    deleteStack: (state, action) => {
      state.stackList = state.stackList.filter(
        element => element !== action.payload.stack
      );
      state.postListShow = postListRefresh(
        state.postListShow,
        state.postListData,
        state.stackList
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadPostListAsync.fulfilled, (state, action) => {
        state.postListData = action.payload.data;
        state.postListShow = action.payload.data;
        state.postOffset += 6;
      })
      .addCase(loadMorePostListAsync.pending, state => {
        state.MorePostListLoading = true;
      })
      .addCase(loadMorePostListAsync.fulfilled, (state, action) => {
        if (action.payload.length) {
          state.postOffset += 6;
          state.postListData = state.postListData.concat(action.payload);
          state.postListShow = postListRefresh(
            state.postListShow,
            state.postListData,
            state.stackList
          );
        } else {
          state.postOffset = 0;
        }
        state.MorePostListLoading = false;
      })
      .addCase(loadMorePostListAsync.rejected, state => {
        state.MorePostListLoading = false;
      })
      .addCase(viewPostDetailAsync.pending, state => {
        console.log("postid전송 시작");
      })
      .addCase(viewPostDetailAsync.fulfilled, (state, action) => {
        console.log("postid완료 및 데이터 받아오기 완료");
      })
      .addCase(viewPostDetailAsync.rejected, state => {});
  },
});

export const { addStack, deleteStack } = postSlice.actions;

export default postSlice.reducer;

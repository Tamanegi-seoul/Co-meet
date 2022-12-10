import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMorePost, fetchPost, fetchViewPostDetail } from "../post/postAPI";

const initialState = {
  post: {},
  postListData: [],
  postListShow: [],
  stackList: [],

  FirstPostListLoading: false,
  FirstPostListDone: false,
  FirstPostListError: null,

  MorePostListLoading: false,
  MorePostListDone: false,
  MorePostListError: null,

  ViewPostDetailLoading: false,
  ViewPostDetailDone: false,
  ViewPostDetailError: null,
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

export const viewPostDetailAsync = createAsyncThunk(
  "viewPostDetailAsync",
  async post_id => {
    const response = await fetchViewPostDetail(post_id);
    return response.data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addStack: (state, action) => {
      state.stackList.unshift(action.payload.stack);
      state.postListShow = state.postListData.filter(data =>
        data.designated_stacks.some(i => state.stackList.includes(i))
      );
    },
    deleteStack: (state, action) => {
      state.stackList = state.stackList.filter(
        element => element !== action.payload.stack
      );
      state.postListShow = state.postListData.filter(data =>
        data.designated_stacks.some(i => state.stackList.includes(i))
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadPostListAsync.pending, state => {
        state.FirstPostListLoading = true;
        state.FirstPostListDone = false;
      })
      .addCase(loadPostListAsync.fulfilled, (state, action) => {
        state.postListData = action.payload.data;
        state.postListShow = action.payload.data;
        state.FirstPostListLoading = false;
        state.FirstPostListDone = true;
      })
      .addCase(loadPostListAsync.rejected, state => {
        state.FirstPostListLoading = false;
        state.FirstPostListDone = false;
      })

      .addCase(loadMorePostListAsync.pending, state => {
        state.MorePostListLoading = true;
        state.MorePostListDone = false;
      })
      .addCase(loadMorePostListAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.postListData = state.postListData.concat(action.payload);
        state.postListShow = state.postListShow.concat(action.payload);
        state.MorePostListLoading = false;
        state.MorePostListDone = true;
      })
      .addCase(loadMorePostListAsync.rejected, state => {
        state.MorePostListLoading = false;
        state.MorePostListDone = false;
      })
      .addCase(viewPostDetailAsync.pending, state => {
        console.log("postid전송 시작");
        state.ViewPostDetailLoading = true;
        state.ViewPostDetailDone = false;
      })
      .addCase(viewPostDetailAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log("postid완료 및 데이터 받아오기 완료");
        state.ViewPostDetailLoading = false;
        state.ViewPostDetailDone = true;
      })
      .addCase(viewPostDetailAsync.rejected, state => {
        console.log("error");
        state.ViewPostDetailLoading = false;
        state.ViewPostDetailDone = false;
      });
  },
});

export const { addStack, deleteStack, fuckyou } = postSlice.actions;

export default postSlice.reducer;

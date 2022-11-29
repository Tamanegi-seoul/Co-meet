import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userApi";

const initialState = {
  me: [123123],
  logInLoading: false, //로그인 시도
  logInDone: false, //로그인 상태
  logInError: null, //로그아웃 시도
};

const dummyUser = {
  id: 1,
  nickname: "johndoe1",
  email: "john.doe@gmail.com",
  prefer_stacks: ["JAVA", "JAVA_SCRIPT"],
};

export const loginAsync2 = createAsyncThunk("login", async () => {
  const response = await fetchUser();
  return;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addStack: (state, action) => {},
    // deleteStack: (state, action) => {},
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync2.pending, state => {
        state.logInLoading = true;
        state.logInError = null;
        state.logInDone = false;
      })
      .addCase(loginAsync2.fulfilled, (state, action) => {
        state.logInLoading = true;
        state.logInDone = true;
        // state.me = action.payload;
        state.me = dummyUser;
      })
      .addCase(loginAsync2.rejected, state => {
        state.logInError = "error";
      });
  },
});

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userApi";

const initialState = {
  me: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
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

export const logOutAsync2 = createAsyncThunk("logout", async () => {
  const response = await fetchUser();
  return;
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addStack: (state, action) => {},
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
      })
      .addCase(logOutAsync2.pending, state => {
        state.logOutLoading = true;
        state.logOutError = null;
        state.logOutDone = false;
      })
      .addCase(logOutAsync2.fulfilled, (state, action) => {
        state.logOutLoading = true;
        state.logOutDone = true;
        // state.me = action.payload;
        state.me = null;
      })
      .addCase(logOutAsync2.rejected, state => {
        state.logOutError = "error";
      });
  },
});
export const { logOut } = userSlice.actions;

export default userSlice.reducer;

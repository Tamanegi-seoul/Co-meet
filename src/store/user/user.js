import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkIdEmail, fetchUser, signupUser } from "./userApi";

const initialState = {
  me: null,
  acessToken: {},
  logInLoading: false,
  logInDone: false,
  logInError: null,

  logOutLoading: false,
  logOutDone: false,
  logOutError: null,

  signUpLoading: false,
  signUpDone: false,
  signUpError: null,

  checkIdEmailLoading: false,
  checkIdEmailDone: false,
  checkIdEmailError: null,
};

const dummyUser = {
  id: 1,
  nickname: "johndoe1",
  email: "john.doe@gmail.com",
  prefer_stacks: ["JAVA", "JAVA_SCRIPT"],
};

export const loginAsync2 = createAsyncThunk("login", async data => {
  const response = await fetchUser();
  console.log(data);
  return;
});

export const logOutAsync2 = createAsyncThunk("logout", async () => {
  const response = await fetchUser();
  return;
});
export const signUpAsync2 = createAsyncThunk("signup", async data => {
  const response = await signupUser(data);
  console.log(response);
  return;
});
export const checkIdEmailAsync = createAsyncThunk(
  "checkIdEmail",
  async data => {
    const response = await checkIdEmail(data);
    console.log(response);
    return;
  }
);
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
      })
      .addCase(checkIdEmailAsync.pending, state => {})
      .addCase(checkIdEmailAsync.fulfilled, (state, action) => {
        console.log("성공");
      })
      .addCase(checkIdEmailAsync.rejected, state => {})
      .addCase(signUpAsync2.pending, state => {})
      .addCase(signUpAsync2.fulfilled, (state, action) => {})
      .addCase(signUpAsync2.rejected, state => {});
  },
});
export const { logOut } = userSlice.actions;

export default userSlice.reducer;

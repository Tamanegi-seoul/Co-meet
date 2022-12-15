import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkIdEmail, fetchUser, loginUser, signupUser } from "./userApi";

const initialState = {
  me: null,
  acessToken: {},

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
  return await loginUser(data)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return error;
    });
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
      .addCase(loginAsync2.pending, state => {})
      .addCase(loginAsync2.fulfilled, (state, action) => {
        console.log(action);
        state.me = dummyUser;
        // state.me = action.payload;
        // window.location.href = "/";
      })
      .addCase(loginAsync2.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(logOutAsync2.pending, state => {
        state.logOutLoading = true;
        state.logOutError = null;
        state.logOutDone = false;
      })
      .addCase(logOutAsync2.fulfilled, (state, action) => {
        state.logOutLoading = true;
        state.logOutDone = true;
        state.logInDone = false;
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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  checkIdEmail,
  fetchUser,
  loginUser,
  logoutUser,
  signupUser,
} from "./userApi";
import jwt from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { removeCookie, setCookie } from "../../utils/setCookie";
const initialState = {
  me: "",
  isLogIn: false,
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

export const loginAsync2 = createAsyncThunk("login", async data => {
  return await loginUser(data)
    .then(res => {
      const userInfo = jwt(res.data.access_token);
      setAuthToken(res.data.access_token);
      setCookie("access_token", res.data.access_token);
      setCookie("refresh_token", res.data.refresh_token);
      return userInfo.sub;
    })
    .catch(error => {
      return error;
    });
});

export const logOutAsync2 = createAsyncThunk("logout", async () => {
  return await logoutUser().then(() => {
    console.log(1);
    removeCookie("access_token");
    removeCookie("refresh_token");
    setAuthToken();
    console.log(2);
  });
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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync2.pending, state => {})
      .addCase(loginAsync2.fulfilled, (state, action) => {
        if (!action.payload.code) {
          state.me = action.payload;
          state.isLogIn = true;
        }
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
        state.isLogIn = false;
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

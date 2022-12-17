import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  checkIdEmail,
  loginUser,
  logoutUser,
  searchUser,
  signupUser,
  updateUser,
} from "./userApi";
import jwt from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { removeCookie, setCookie } from "../../utils/setCookie";
const initialState = {
  nickName: null,
  email: null,
  memberId: null,
  userStack: [],
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
      return userInfo;
    })
    .catch(error => {
      return error;
    });
});

export const logOutAsync2 = createAsyncThunk("logout", async () => {
  return await logoutUser().then(() => {
    removeCookie("access_token");
    removeCookie("refresh_token");
    setAuthToken();
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
export const searchAsync = createAsyncThunk("search", async data => {
  return await searchUser(data)
    .then(res => {
      return res.data.data;
    })
    .catch(error => console.log(error));
});

export const updateAsync = createAsyncThunk("update", async data => {
  return await updateUser(data)
    .then(res => {
      return res.data.data;
    })
    .catch(error => {
      console.log(error);
    });
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync2.pending, state => {})
      .addCase(loginAsync2.fulfilled, (state, action) => {
        if (!action.payload.code) {
          state.email = action.payload.sub;
          state.memberId = action.payload.member_id;
          state.nickName = action.payload.nickname;
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
        state.nickName = null;
        state.email = null;
        state.memberId = null;
      })
      .addCase(logOutAsync2.rejected, state => {
        state.logOutError = "error";
      })
      .addCase(checkIdEmailAsync.pending, state => {})
      .addCase(checkIdEmailAsync.fulfilled, (state, action) => {})
      .addCase(checkIdEmailAsync.rejected, state => {})
      .addCase(signUpAsync2.pending, state => {})
      .addCase(signUpAsync2.fulfilled, (state, action) => {})
      .addCase(signUpAsync2.rejected, state => {})
      .addCase(searchAsync.pending, state => {})
      .addCase(searchAsync.fulfilled, (state, action) => {})
      .addCase(searchAsync.rejected, state => {})
      .addCase(updateAsync.pending, state => {})
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.nickName = action.payload.nickname;
        state.userStack = [...action.payload.preferred_stacks];
      })
      .addCase(updateAsync.rejected, state => {});
  },
});
export const { logOut } = userSlice.actions;

export default userSlice.reducer;

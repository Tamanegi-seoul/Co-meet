import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  checkIdEmail,
  deleteUser,
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
  profileImage: null,
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
      console.log(data);
      console.log(res.data);
      const userInfo = jwt(res.data.accessToken);
      setAuthToken(res.data.accessToken);
      setCookie("accessToken", res.data.accessToken);
      setCookie("refreshToken", res.data.refreshToken);
      return userInfo;
    })
    .catch(error => {
      return error;
    });
});

export const logOutAsync2 = createAsyncThunk("logout", async () => {
  return await logoutUser().then(() => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    setAuthToken();
  });
});
export const signUpAsync2 = createAsyncThunk("signup", async data => {
  const response = await signupUser(data);
  console.log(data);
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
      console.log(res.data.data);
      return res.data.data;
    })
    .catch(error => console.log(error));
});

export const updateAsync = createAsyncThunk("update", async data => {
  return await updateUser(data)
    .then(res => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch(error => {
      console.log(error);
    });
});
export const deleteAsync = createAsyncThunk("delete", async data => {
  return await deleteUser(data)
    .then(res => {
      removeCookie("accessToken");
      removeCookie("refreshToken");
      setAuthToken();
      console.log("회원탈퇴 완료!");
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
          state.memberId = action.payload.memberId;
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
        state.profileImage = null;
        state.userStack = [];
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
      })
      .addCase(updateAsync.rejected, state => {})
      .addCase(deleteAsync.pending, state => {})
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.logOutLoading = true;
        state.logOutDone = true;
        state.isLogIn = false;
        state.nickName = null;
        state.email = null;
        state.memberId = null;
        state.profileImage = null;
        state.userStack = [];
      })
      .addCase(deleteAsync.rejected, state => {});
  },
});
export const { logOut } = userSlice.actions;

export default userSlice.reducer;

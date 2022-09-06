import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import generateToken from "../../utils/Token";
import { setCookie, removeCookie } from "../../utils/Cookie";

// url
const REACT_APP_API_USERS_URL = `http://15.164.224.94/api/member/signup`;

// initialState
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// thunk function
// [프론트 처리 - 중복확인] --> 백엔드 연동시 사용x
export const __doubleCheck = createAsyncThunk(
  "doubleCheck",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(REACT_APP_API_USERS_URL);
      const userData = data.find((element) => element.userId === payload);
      if (!userData) {
        return thunkAPI.fulfillWithValue("success");
      } else {
        return thunkAPI.rejectWithValue("reject");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// [특정 사용자 확인 - 로그인]
export const __getUser = createAsyncThunk(
  "getUser",
  async (payload, thunkAPI) => {
    const { userId, password } = payload;
    try {
      const { data } = await axios.get(
        REACT_APP_API_USERS_URL + `?userId=${userId}`
      );
      const user = data[0];
      if (user === undefined) {
        return thunkAPI.rejectWithValue("noUser");
      } else {
        if (user.password === password) {
          const token = generateToken(userId); // 임시 토큰
          setCookie("access_token", token);
          return thunkAPI.fulfillWithValue(["success", userId]);
        } else {
          return thunkAPI.rejectWithValue("checkPassword");
        }
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//[로그인]
export const __login = createAsyncThunk("login", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(REACT_APP_API_USERS_URL, payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// [회원가입]
export const __createUsers = createAsyncThunk(
  "createUsers",
  async (newUser, thunkAPI) => {
    try {
      const { data } = await axios.post(REACT_APP_API_USERS_URL, newUser);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//[로그아웃]
export const __logoutUsers = createAsyncThunk(
  "logoutUsers",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(REACT_APP_API_USERS_URL);
      removeCookie("access_token");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//createSlice
export const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [__createUsers.pending]: (state, action) => {
      state.isLoding = true; // 네트워크 요청 시작시, 로딩 상태를 true로 변경
    },
    // fulfill
    [__getUser.fulfilled]: (state, action) => {
      state.isLoding = true;
      state.users = state.users.concat({ userId: action.payload[1] });
    },
    [__doubleCheck.fulfilled]: (state, action) => {
      state.isLoding = true;
    },
    [__createUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = state.users.concat({
        id: action.payload.id,
        userId: action.payload.userId,
        nickName: action.payload.nickName,
      });
    },
    [__login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = state.users.concat({
        id: action.payload.id,
        userId: action.payload.userId,
      });
    },
    [__logoutUsers.fulfilled]: (state, action) => {
      state.isLoding = true;
    },
    // reject
    [__createUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__doubleCheck.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__logoutUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

// export
export const {} = users.actions;
export default users.reducer;

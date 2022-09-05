import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import generateToken from "../../utils/Token";
import { setCookie, removeCookie } from "../../utils/Cookie";

// url
const REACT_APP_API_USERS_URL = `http://localhost:5001/users`;

// initialState
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// thunk function
// [특정 사용자 확인 - 로그인]
export const __getUser = createAsyncThunk(
  "getUser",
  async (payload, thunkAPI) => {
    const { userId, password } = payload;
    try {
      await axios
        .get(REACT_APP_API_USERS_URL + `?userId=${userId}`)
        .then((res) => {
          console.log("res", res.data[0]);
          if (res.data[0] == undefined) {
            alert("사용자가 존재하지 않습니다.");
          } else {
            if (res.data[0].password === password) {
              alert("로그인 성공");
              const token = generateToken(userId); // 임시 토큰
              setCookie("access_token", token);
              return thunkAPI.fulfillWithValue(res.data);
            } else {
              alert("비밀번호를 다시 확인하세요");
              return thunkAPI.rejectWithValue("비밀번호를 다시 확인하세요");
            }
          }
        });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// [회원가입]
export const __createUsers = createAsyncThunk(
  "createUsers",
  async (newUser, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:5001/users", newUser);
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
    [__createUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = state.users.concat({
        id: action.payload.id,
        userId: action.payload.userId,
      });
    },
    [__createUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

// export
export const {} = users.actions;
export default users.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// url
const REACT_APP_API_USERS_URL = `http://localhost:5001/users`;

// initialState
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// thunk function
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
  },
});

// export
export const {} = users.actions;
export default users.reducer;

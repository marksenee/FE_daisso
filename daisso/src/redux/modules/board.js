import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";

// url
const REACT_APP_API_CREATE_URL = `http://15.164.224.94/api/auth/post`;
const REACT_APP_API_UPDATE_URL = `http://15.164.224.94/api/auth/post/`;

// initialState
const initialState = {
  board: [],
  isLoading: false,
  error: null,
};

// thunk function
// 게시글 데이터 보내기
export const __createBoard = createAsyncThunk(
  "createBoard",
  async (payload, thunkAPI) => {
    try {
      const access = getCookie("access_token");
      const refresh = getCookie("refresh_token");

      axios.defaults.headers.common["authorization"] = access;
      axios.defaults.headers.common["refresh-token"] = refresh;

      const { data } = await axios.post(REACT_APP_API_CREATE_URL, payload, {
        headers: {
          "Contest-Type": "multipart/form-data",
        },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// createSlice
export const board = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {
    [__createBoard.pending]: (state, action) => {
      state.isLoding = true;
    },
    // fulfill
    [__createBoard.fulfilled]: (state, action) => {
      state.isLoding = true;
    },
    [__createBoard.fulfilled]: (state, action) => {
      state.isLoding = true;
    },
    // reject
    [__createBoard.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

// export
export const {} = board.actions;
export default board.reducer;

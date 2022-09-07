import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";

// url
const REACT_APP_API_GETDETAIL_URL = `http://15.164.224.94/api/post/`;
const REACT_APP_API_CREATE_URL = `http://15.164.224.94/api/auth/post`;
const REACT_APP_API_UPDATE_URL = `http://15.164.224.94/api/auth/post/`;

// initialState
const initialState = {
  board: [],
  isLoading: false,
  error: null,
};

// thunk function
// 게시글 특정 데이터 가져오기
export const __getDetailBoard = createAsyncThunk(
  "getDetailBoard",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        REACT_APP_API_GETDETAIL_URL + `${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
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

export const __updateBoard = createAsyncThunk(
  "updateBoard",
  async (payload, thunkAPI) => {
    const { id, formData } = payload;
    try {
      const access = getCookie("access_token");
      const refresh = getCookie("refresh_token");

      axios.defaults.headers.common["authorization"] = access;
      axios.defaults.headers.common["refresh-token"] = refresh;
      const { data } = await axios.put(
        REACT_APP_API_UPDATE_URL + `${id}`,
        formData,
        {
          headers: {
            "Contest-Type": "multipart/form-data",
          },
        }
      );
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
    [__getDetailBoard.fulfilled]: (state, action) => {
      state.isLoding = true;
      state.board = action.payload.data;
    },
    [__createBoard.fulfilled]: (state, action) => {
      state.isLoding = true;
    },
    [__updateBoard.fulfilled]: (state, action) => {
      console.log("dd", action);
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

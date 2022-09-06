import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_API_POST_URL = `http://15.164.224.94/api/post`;

const initialState = {
  post: [],
  detail: [],
  isLoading: false,
  // success: true,
  error: null,
};

export const __getPost = createAsyncThunk("post/getPost", async (payload, thunkAPI) => {
  try {
    const data = await axios.get(REACT_APP_API_POST_URL);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getPostDetail = createAsyncThunk(
  "post/getPostDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(REACT_APP_API_POST_URL + `/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;

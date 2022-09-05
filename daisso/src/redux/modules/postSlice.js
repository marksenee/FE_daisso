import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [],
  success: true,
  error: null,
};

export const __getPost = createAsyncThunk(
  "post/getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/post");
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
    [__getPost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;

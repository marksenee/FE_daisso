import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";

const REACT_APP_API_LIKES_URL = `http://15.164.224.94/api/auth/like/post`;

const initialState = {
  success: true,
  data: "",
  error: null,
};

export const __likesPost = createAsyncThunk("likesPost", async (payload, thunkAPI) => {
  try {
    const access = getCookie("access_token");
    const refresh = getCookie("refresh_token");

    axios.defaults.headers.common["authorization"] = access;
    axios.defaults.headers.common["refresh-token"] = refresh;

    const data = await axios.post(REACT_APP_API_LIKES_URL + `/${payload}`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {},
  extraReducers: {
    [__likesPost.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default likesSlice.reducer;

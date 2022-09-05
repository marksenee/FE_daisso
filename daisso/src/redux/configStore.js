import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";

const store = configureStore({
  reducer: { post: post },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

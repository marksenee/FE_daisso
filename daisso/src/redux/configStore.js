import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import users from "./modules/users";

const store = configureStore({
  reducer: { post: post, users },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

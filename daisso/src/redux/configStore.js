import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import users from "./modules/users";
import board from "./modules/board";

const store = configureStore({
  reducer: { post: post, users, board },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

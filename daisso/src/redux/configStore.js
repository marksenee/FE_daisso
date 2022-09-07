import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import users from "./modules/users";
import board from "./modules/board";
import likes from "./modules/likesSlice";

const store = configureStore({
  reducer: { post, users, likes, board },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

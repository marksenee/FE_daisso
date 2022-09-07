import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import users from "./modules/users";
import likes from "./modules/likesSlice";

const store = configureStore({
  reducer: { post, users, likes },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice/userSlice";
import navbarSlice from './NavSlice/navSlice'
const store = configureStore({
  reducer: {
    user: userSlice,
    navbar: navbarSlice
  },
});
export default store;

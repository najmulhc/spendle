import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAppNavbar: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setAppNavbar: (state, action) => {
      const { isAppNavbar } = action.payload;
      state = {
        ...state,
        isAppNavbar,
      };
    },
  },
});

export const { setAppNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLanding: true,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setToApp: (state) => {
      state.isLanding = false;
    },
    setToLanding: (state) => {
      state.isLanding = true;
    },
  },
});

export const { setToApp, setToLanding } = navbarSlice.actions;
export default navbarSlice.reducer;

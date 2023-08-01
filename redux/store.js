const { configureStore } = require("@reduxjs/toolkit");
const { default: navbarSlice } = require("./navbarSlice/navbarSlice");

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
  },
});

export default store;

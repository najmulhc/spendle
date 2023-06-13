import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "najmul Huda",
    account: {
      balence: 0,
      spent: 0,
      gained: 0,
    },
  },
  reducers: {
    setUser: (state, action) => {
      const { username, account } = action.payload;
      state.username = username;
      state.account = account;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

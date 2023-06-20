import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    account: {
      balence: 0,
      spent: 0,
      gained: 0,
    },
    transactions: [],
  },
  reducers: {
    setUser: (state, action) => {
      const { username, account } = action.payload;
      state.username = username;
      state.account = account;
    },
    setTransactions: (state, action) => {
      const { transactions } = action.payload;
      state.transactions = [...transactions];
    },
  },
});

export const { setUser, setTransactions } = userSlice.actions;

export default userSlice.reducer;

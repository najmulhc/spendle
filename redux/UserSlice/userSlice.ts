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
    gainingSources: [],
    spendingSources: [],
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
    setGainingSources : (state , action) => {
       state.gainingSources = [...action.payload.gainingSources];
    },
    setSpendingSource : (state , action) => {
       const { spendingSources } = action.payload;
       state.spendingSources = [...spendingSources];
    },

  },
});

export const { setUser, setTransactions, setGainingSources, setSpendingSource } = userSlice.actions;

export default userSlice.reducer;

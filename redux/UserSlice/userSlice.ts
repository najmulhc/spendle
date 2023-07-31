import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
  account: {
    balence: 0,
    spent: 0,
    gained: 0,
  },
  transactions: [],
  gainingSources: [],
  spendingSources: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { username, account, gainingSources, spendingSources } =
        action.payload;
      state.username = username;
      state.account = account;
      state.gainingSources = [...gainingSources];
      state.spendingSources = [...spendingSources];
    },
    setTransactions: (state, action) => {
      const { transactions } = action.payload;
      state.transactions = [...transactions];
    },
    // setting gaining sources
    setGainingSources: (state, action) => {
      const { gainingSources } = action.payload;
      state.spendingSources = [...gainingSources];
    },
    // setting spending sources
    setSpendingSource: (state, action) => {
      const { spendingSources } = action.payload;
      state.spendingSources = [...spendingSources];
    },
    resetState: (state, action) => {
      state = { ...state, ...initialState };
    },
  },
});

export const {
  setUser,
  setTransactions,
  setGainingSources,
  setSpendingSource,
  resetState,
} = userSlice.actions;

export default userSlice.reducer;

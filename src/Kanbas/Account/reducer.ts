import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser, updateCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;

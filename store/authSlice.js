// store/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload; // Store user data if needed
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.user = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;

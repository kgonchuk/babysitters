import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCurrentUser,
  logIn,
  logOut,
  register,
} from "../Auth/authOperation";

const authSlice = createSlice({
  name: `auth`,
  initialState: {
    user: { name: null, email: null, userId: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.user.userId = action.payload.uid;
        state.isLoading = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.user.userId = action.payload.uid;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.user.userId = null;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user.userId = action.payload.uid;
        state.isLoading = false;
      }),
});
export const { toggleFavoriteNannies, updateFavoriteNannies } =
  authSlice.actions;
export const authReducer = authSlice.reducer;

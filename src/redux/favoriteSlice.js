import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
  name: `favorites`,
  initialState: {
    favoritesNannies: [],
    currentPageFavorites: 1,
  },

  reducers: {
    addFavorites(state, action) {
      state.favoritesNannies.push(action.payload);
    },
    deleteFavorites(state, action) {
      const index = state.favoritesNannies.findIndex(
        (item) => item.id === action.payload.id
      );
      state.favoritesNannies.splice(index, 1);
    },
    clearFavorites(state, action) {
      state.favoritesNannies = [];
    },
    changePageFavorites(state) {
      state.currentPageFavorites += 1;
    },
    resetPageFavorites(state, action) {
      state.currentPageFavorites = 1;
    },
  },
});

export const {
  addFavorites,
  deleteFavorites,
  clearFavorites,
  changePageFavorites,
  resetPageFavorites,
} = FavoritesSlice.actions;
export const favoritesReducer = FavoritesSlice.reducer;

import { createSelector } from "@reduxjs/toolkit";

export const selectUserName = (state) => state.auth.user.name;
export const selectUser = (state) => state.auth;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsLoading = (state) => state.nannies.isLoading;

export const selectError = (state) => state.nannies.error;

export const selectNanniesItems = (state) => state.nannies.data;

export const selectTotalPages = (state) => state.nannies.totalPages;

export const selectCurrentPage = (state) => state.nannies.currentPage;

export const selectFilter = (state) => state.nannies.selectedFilter;
export const selectFilters = (state) => state.filter.filtersNany;
export const selectFilterFavorite = (state) => state.filter.filtersFavorite;
export const selectItemsPerPage = (state) => state.nannies.itemsPerPage;
export const selectFavorites = (state) => state.favorites.favoritesNannies;
export const selectFavoritesNannies = (state) =>
  state.favorites.favoritesNannies;
export const selectPageFavorites = (state) =>
  state.favorites.currentPageFavorites;

export const selectPagenateFavorites = createSelector(
  [selectFavoritesNannies, selectPageFavorites],
  (favoritesNannies, currentPage) => {
    const limit = 3;
    const nextIndex = currentPage * limit;
    return favoritesNannies.slice(0, nextIndex);
  }
);

export const selectFilteredNannies = createSelector(
  [selectNanniesItems, selectFilter],
  (nannies, filter) => {
    const key = filter.replace("_ascending", "").replace("_descending", "");
    if (filter.includes("_ascending")) {
      return [...nannies].sort((a, b) => {
        if (typeof a[key] === "number" && typeof b[key] === "number") {
          return a[key] - b[key];
        } else {
          return a[key].localeCompare(b[key]);
        }
      });
    } else if (filter.includes("_descending")) {
      return [...nannies].sort((a, b) => {
        if (typeof a[key] === "number" && typeof b[key] === "number") {
          return b[key] - a[key];
        } else {
          return b[key].localeCompare(a[key]);
        }
      });
    } else {
      return nannies;
    }
  }
);

export const selectfilteredNanniesFavorite = createSelector(
  [selectFavoritesNannies, selectFilterFavorite],
  (favorites, filter) => {
    if (filter === "A to Z") {
      return [...favorites].sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === "Z to A") {
      return [...favorites].sort((a, b) => b.name.localeCompare(a.name));
    } else if (filter === "Less than 10$") {
      const filtered = [...favorites].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      if (filtered.some((item) => item.price_per_hour <= 10)) {
        return filtered.filter((item) => item.price_per_hour <= 10);
      } else {
        alert('Price "less than 10$"  was not found');
      }
      return filtered;
    } else if (filter === "Greater than 10$") {
      return [...favorites].sort((a, b) => a.price_per_hour - b.price_per_hour);
    } else if (filter === "Popular") {
      return [...favorites].sort((a, b) => b.rating - a.rating);
    } else if (filter === "Not popular") {
      return [...favorites].sort((a, b) => a.rating - b.rating);
    } else if (filter === "Show all") {
      return [...favorites];
    }
  }
);

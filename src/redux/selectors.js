export const selectUserName = (state) => state.auth.user.name;
// export const selectNannies = (state) => state.nannies.items;
// export const selectFavoritesNannies = (state) => state.nannies.favorites;
// export const selectFilter = (state) => state.teachers.filter;
export const selectFilter = (state) => state.nannies.selectedFilter;
export const selectNanniesItems = (state) => state.nannies.items;
export const selectFavorites = (state) => state.nannies.favorites;

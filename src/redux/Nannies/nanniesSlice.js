// // import {
// //   fetchFirstPage,
// //   fetchTotalHits,
// //   loadMorePages,
// // } from "./nanniesOperation";
// // import { createSlice } from "@reduxjs/toolkit";
// // const handlePending = (state) => {
// //   state.isLoading = true;
// // };

// // const handleRejected = (state, action) => {
// //   state.isLoading = false;
// //   state.error = action.payload;
// // };

// // const nanniesSlice = createSlice({
// //   name: "nannies",
// //   initialState: {
// //     nanniesItems: [],
// //     currentPage: 1,
// //     totalPages: null,
// //     isLoading: false,
// //     error: null,
// //     selectedFilter: "",
// //   },
// //   reducers: {
// //     changePage(state) {
// //       state.currentPage += 1;
// //     },
// //     setSelectedFilter: (state, action) => {
// //       state.selectedFilter = action.payload;
// //     },
// //   },

// //   extraReducers: (builder) =>
// //     builder
// //       .addCase(fetchTotalHits.pending, handlePending)
// //       .addCase(fetchTotalHits.rejected, handleRejected)
// //       .addCase(fetchTotalHits.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.error = null;
// //         state.totalPages = Math.ceil(action.payload / 3);
// //       })
// //       .addCase(fetchFirstPage.pending, handlePending)
// //       .addCase(fetchFirstPage.rejected, handleRejected)
// //       .addCase(fetchFirstPage.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.error = null;
// //         state.psychologistsItems = action.payload;
// //       })
// //       .addCase(loadMorePages.pending, handlePending)
// //       .addCase(loadMorePages.rejected, handleRejected)
// //       .addCase(loadMorePages.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.error = null;
// //         state.psychologistsItems = [
// //           ...state.psychologistsItems,
// //           ...action.payload,
// //         ];
// //       }),
// // });

// // export const { changePage, setSelectedFilter, setSelectedTheme } =
// //   nanniesSlice.actions;
// // export const nanniesReducer = nanniesSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";

// export const nanniesSlice = createSlice({
//   name: "nannies",
//   initialState: {
//     items: [],
//     favorites: [],
//     filter: {
//       language: "",
//       level: "",
//       price: "",
//     },
//   },
//   reducers: {
//     addNannies: (state, action) => {
//       state.items = action.payload;
//     },
//     addFavorite: (state, action) => {
//       state.favorites.push(action.payload);
//     },
//     removeFavorite: (state, action) => {
//       state.favorites = state.favorites.filter(
//         (item) => item.lessons_done !== action.payload.lessons_done
//       );
//     },
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//     removeFilter(state) {
//       state.filter.language = "";
//       state.filter.level = "";
//       state.filter.price = "";
//     },
//   },
// });
// const nanniesPersistConfig = {
//   key: "nannies",
//   storage,
//   whitelist: ["favorites"],
// };

// export const {
//   addNaannies,
//   addFavorite,
//   removeFavorite,
//   setFilter,
//   removeFilter,
// } = nanniesSlice.actions;

// export const nanniesReducer = nanniesSlice.reducer;
// export const persistedTeachersReducer = persistReducer(
//   nanniesPersistConfig,
//   nanniesReducer
// );

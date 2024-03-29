import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFirstPage,
  fetchTotalHits,
  loadMorePages,
} from "./nanniesOperation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState: {
    data: [],
    currentPage: 1,
    itemsPerPage: 3,
    totalPages: null,
    isLoading: false,
    error: null,
    selectedFilter: "",
  },
  reducers: {
    changePage(state) {
      state.currentPage += 1;
    },
    resetState: (state) => {
      state.data = [];
      state.currentPage = 1;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    getLoading(state, action) {
      state.isLoading = true;
    },
    getNannies(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchTotalHits.pending, handlePending)
      .addCase(fetchTotalHits.rejected, handleRejected)
      .addCase(fetchTotalHits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalPages = Math.ceil(action.payload / 3);
      })
      .addCase(fetchFirstPage.pending, handlePending)
      .addCase(fetchFirstPage.rejected, handleRejected)
      .addCase(fetchFirstPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.psychologistsItems = action.payload;
      })
      .addCase(loadMorePages.pending, handlePending)
      .addCase(loadMorePages.rejected, handleRejected)
      .addCase(loadMorePages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.psychologistsItems = [
          ...state.psychologistsItems,
          ...action.payload,
        ];
      }),
});

export const {
  changePage,
  setSelectedFilter,
  getLoading,
  getNannies,
  nextPage,
  resetState,
} = nanniesSlice.actions;

export const nanniesReducer = nanniesSlice.reducer;

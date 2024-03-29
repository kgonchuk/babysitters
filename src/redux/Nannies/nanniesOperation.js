import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase";
import {
  endBefore,
  limitToFirst,
  onValue,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

export const fetchTotalHits = createAsyncThunk(
  "nannies/fetchAll",
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db, "nannies/");
      return new Promise((resolve, reject) => {
        onValue(
          dbRef,
          (snapshot) => {
            const totalHits = snapshot.size;
            resolve(totalHits);
          },
          (error) => {
            console.error("Error fetching data:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFirstPage = createAsyncThunk(
  "nannies/fetchFirstPage",
  async (_, thunkAPI) => {
    try {
      const recentRef = query(ref(db, "nannies"), limitToFirst(3));
      return new Promise((resolve, reject) => {
        onValue(
          recentRef,
          (snapshot) => {
            const data = snapshot.val();
            resolve(data);
          },
          (error) => {
            console.error("Error fetching data:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMorePages = createAsyncThunk(
  "nannies/fetchMorePage",
  async (currentPage, thunkAPI) => {
    try {
      const per_page = 3;
      const startKey = (currentPage - 1) * per_page;
      const endKey = currentPage * per_page;
      const loadMore = query(
        ref(db, "nannies"),
        orderByKey(),
        startAt(startKey.toString()),
        endBefore(endKey.toString())
      );
      return new Promise((resolve, reject) => {
        onValue(
          loadMore,
          (snapshot) => {
            const data = snapshot.val();
            const dataArray = Object.values(data);
            resolve(dataArray);
          },
          (error) => {
            console.error("Error fetching data:", error);
            reject(error);
          }
        );
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

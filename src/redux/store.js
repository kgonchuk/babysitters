import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { favoritesReducer } from "./favoriteSlice";
import { nanniesReducer } from "./Nannies/nanniesSlice";
import { filterReducer } from "./filterSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const favoretesPersistConfig = {
  key: "favorites",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    nannies: nanniesReducer,
    favorites: persistReducer(favoretesPersistConfig, favoritesReducer),
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

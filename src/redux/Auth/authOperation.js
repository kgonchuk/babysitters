import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import Notiflix from "notiflix";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { name, email, password } = credentials;
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredentials.user, { displayName: name });
      const user = auth.currentUser;
      const dataUser = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        accessToken: user.stsTokenManager.accessToken,
      };
      return dataUser;
    } catch (error) {
      const dataError = { code: error.code, message: error.message };
      console.error(`Error: ${dataError}`);
      return thunkAPI.rejectWithValue(dataError);
    }
  }
);
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { email, password } = credentials;
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;
      const dataUser = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        accessToken: user.stsTokenManager.accessToken,
      };

      Notiflix.Notify.success("Wellcome to Nannies.Sevice!");
      return dataUser;
    } catch (error) {
      const dataError = { code: error.code, message: error.message };
      console.error(`Error: ${dataError}`);
      return thunkAPI.rejectWithValue(dataError);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    const dataError = { code: error.code, message: error.message };
    console.error(`Error: ${dataError}`);
    return thunkAPI.rejectWithValue(dataError);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  (_, thunkAPI) => {
    return new Promise((resolve, reject) => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user === null) {
            reject("Unable to fetch user");
          } else {
            const dataUser = {
              name: user.displayName,
              email: user.email,
              accessToken: user.accessToken,
            };
            resolve(dataUser);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
);

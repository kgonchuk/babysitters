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
      await updateProfile(userCredentials.user, { name: name });
      const user = auth.currentUser;
      const dataUser = {
        uid: user.uid,
        name: user.name,
        email: user.email,
        accessToken: user.stsTokenManager.accessToken,
      };
      Notiflix.Notify.success("Wellcome to Nannies.Sevice!");
      return dataUser;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error: ${errorCode}`, errorMessage);
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
        name: user.name,
        email: user.email,
        accessToken: user.stsTokenManager.accessToken,
      };

      Notiflix.Notify.success("Wellcome to Nannies.Sevice!");
      return dataUser;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error: ${errorCode}`, errorMessage);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error: ${errorCode}`, errorMessage);
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
              name: user.name,
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

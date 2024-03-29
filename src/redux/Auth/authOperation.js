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
      Notiflix.Notify.success("Wellcome to Nannies.Sevice!");
      return dataUser;
    } catch (error) {
      alert(`This email already used`);
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
      alert("Invalid passsword or email");
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
            const serializedUser = {
              name: user.displayName,
              email: user.email,
              accessToken: user.accessToken,
            };
            resolve(serializedUser);
          }
        });
      } catch (error) {
        const serializedError = {
          code: error.code,
          message: error.message,
        };
        return thunkAPI.rejectWithValue(serializedError);
      }
    });
  }
);

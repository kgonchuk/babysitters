// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAid0rgAKuXJe079ONuH3ucXGQybSphnZo",
//   authDomain: "pet-project-022024.firebaseapp.com",
//   databaseURL:
//     "https://pet-project-022024-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "pet-project-022024",
//   storageBucket: "pet-project-022024.appspot.com",
//   messagingSenderId: "16963991390",
//   appId: "1:16963991390:web:086207c9d9e549d35ec1cf",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

//

// =================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1kXKeS5HgLceBfAC-NZs58MzMXkOO2Ro",
  authDomain: "nannies-project-51d3a.firebaseapp.com",
  databaseURL:
    "https://nannies-project-51d3a-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "nannies-project-51d3a",
  storageBucket: "nannies-project-51d3a.appspot.com",
  messagingSenderId: "294672292691",
  appId: "1:294672292691:web:51891e2abc909492261fa6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// ======================================

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyB3RyTGlntfLdn8Ed3M1uyivL3ERcXlsDY",
//   authDomain: "teachers-838b3.firebaseapp.com",
//   projectId: "teachers-838b3",
//   storageBucket: "teachers-838b3.appspot.com",
//   messagingSenderId: "290644177618",
//   appId: "1:290644177618:web:ecb1ac84338daa0dd1b30b",
//   databaseURL:
//     "https://teachers-838b3-default-rtdb.europe-west1.firebasedatabase.app/",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getDatabase(app);

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layot from "../src/components/Layot/Layot.jsx";
import { Global } from "./styles/GlobalStyle.styled.js";
import "./firebase/firebase.js";

const Home = lazy(() => import("./pages/HomePage/HomePage.js"));
const Favorite = lazy(() => import("./pages/FavoritePage/FavoritePage.js"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies.js"));
function App() {
  return (
    <>
      <Global />
      <Routes>
        <Route path="/" element={<Layot />}>
          <Route index element={<Home />} />
          <Route path="/nannies" element={<Nannies />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

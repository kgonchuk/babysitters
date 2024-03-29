import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layot from "../src/components/Layot/Layot.jsx";
import { Global } from "./styles/GlobalStyle.styled.js";
import PrivateRoute from "components/Routes/PrivatRoute.jsx";
import "./firebase/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/Auth/authOperation.js";
import HomePage from "pages/HomePage/HomePage.js";
import NanniesPage from "pages/Nannies/Nannies.js";
import { FavoritePage } from "pages/FavoritePage/FavoritePage.js";

// const Home = lazy(() => import("./pages/HomePage/HomePage.js"));
// const Favorite = lazy(() => import("./pages/FavoritePage/FavoritePage.js"));
// const Nannies = lazy(() => import("./pages/Nannies/Nannies.js"));
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Global />
      <Routes>
        <Route path="/" element={<Layot />}>
          <Route index element={<HomePage />} />
          <Route
            path="/nannies"
            element={
              <PrivateRoute redirectTo="/" component={<NanniesPage />} />
            }
          />
          <Route
            path="/favorite"
            element={
              <PrivateRoute redirectTo="/" component={<FavoritePage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

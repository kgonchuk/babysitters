import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import AppBar from "./AppBar/AppBar";

const Layot = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layot;

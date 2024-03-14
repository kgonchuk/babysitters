import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layot = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layot;

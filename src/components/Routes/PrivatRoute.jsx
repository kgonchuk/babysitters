import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const authentication = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      setIsLoggedIn(user);
    });

    return () => unsubscribe();
  }, [authentication]);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

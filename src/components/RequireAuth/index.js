import React from "react";
import { isAuthenticated } from "../../api";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, redirectTo }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(() => {
    const isAuth = async () => {
      const res = await isAuthenticated();
      setIsLoggedIn(res);
    };
    isAuth();
  }, []);

  return isLoggedIn?.message === "Unauthorized" || isLoggedIn === false ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
};

export default RequireAuth;

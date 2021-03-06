import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const GuestPrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user.email ? (
    <Outlet location={location} />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default GuestPrivateRoute;

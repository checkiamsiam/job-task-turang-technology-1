import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import * as ROUTES from '../constant/routes';
import { useAuth } from "../hooks";

export function IsUserRedirect({ children }) {
  let auth = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.HOME;

  if (auth.user) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }
  return children;
}

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to={ROUTES.LOG_IN} state={{ from: location }} replace />;
  }

  return children;
}
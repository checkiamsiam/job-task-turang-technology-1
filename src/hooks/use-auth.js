import React from "react";
import { AuthContext } from "../context/auth";

export default function useAuth() {
  return React.useContext(AuthContext);
}

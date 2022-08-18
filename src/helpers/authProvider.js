import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth";
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
  const [user, setUser] = useState(null);
  console.log(user, "user-authProvider-helpers");
  const signout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    if (auth) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      setUser(null);
      localStorage.removeItem("user");
      console.log("sign out");
    }
  }, [auth]);

  const value = { user, auth, signout, setAuth, setUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

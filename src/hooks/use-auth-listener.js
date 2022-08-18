import { useState, useEffect } from "react";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    const listener = () => {
      if (!JSON.parse(localStorage.getItem("authUser"))) {
        localStorage.removeItem("user");
        setUser(null);
      }
    };
    console.log(user, "user-auth");
    return () => listener();
  });
  return { user };
}

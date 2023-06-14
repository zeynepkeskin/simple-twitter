// AuthContext.js

import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user profile when the token changes
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const fetchUserProfile = () => {
    fetch("http://localhost:3005/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  };

  const login = (authData) => {
    fetch("http://localhost:3005/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        const { token, user } = responseData;
        setToken(token);
        setUser(user);
        localStorage.setItem("token", token);
        window.location.href = "/";
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const authContextValue = {
    token,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

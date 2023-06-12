// AuthContext.js

import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (authData) => {
    // Make the API request to login and handle the response
    // Set the token and user state variables based on the response
    // You can use axios, fetch, or any other library to make the request

    // Example using axios
    axios
      .post("/login", authData)
      .then((response) => {
        const { token, user } = response.data;
        setToken(token);
        setUser(user);
      })
      .catch((error) => {
        // Handle login error
      });
  };

  const logout = () => {
    // Perform any necessary cleanup or API request to logout the user
    setToken(null);
    setUser(null);
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

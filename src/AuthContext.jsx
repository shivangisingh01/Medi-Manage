// AuthContext.jsx
import React, { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication status on initial load
  
    const login = (userData) => {
      setIsAuthenticated(true);
      setUser(userData);
    };
  
    const logout = () => {
      setIsAuthenticated(false);
      setUser(null);
    };


  return (
    <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated, user,setUser ,login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

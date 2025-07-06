// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import authService from "../appwrite/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check user status on mount
  useEffect(() => {
    (async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = async ({ email, password }) => {
  setLoading(true);
  try {
    await authService.login({ email, password });
    const currentUser = await authService.getCurrentUser();
    setUser(currentUser);
  } catch (error) {
    setUser(null);
    // Optionally, handle error (e.g., show error message)
  } finally {
    setLoading(false);
  }
};

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use context easily
export const useAuth = () => useContext(AuthContext);

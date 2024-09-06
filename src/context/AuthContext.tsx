"use client";

import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  error: string;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const login = (username: string, password: string) => {
    // Static username and password check
    if (username === "user" && password === "pass") {
      setIsAuthenticated(true);
    } else {
      setError("Invalid username or password");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setError("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

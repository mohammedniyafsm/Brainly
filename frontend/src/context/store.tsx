import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of context
interface AuthContextType {
  token: string;
  isLoggedIn: boolean;
  storeTokenInLS: (token: string) => void;
  LogoutUser: () => void;
}

// Create the context with an initial `undefined` value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props for the provider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>(() => localStorage.getItem("token") || "");

  const storeTokenInLS = (serverToken: string) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, storeTokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook with type guard
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Tom");

  const login = (newUser) => {
    if (newUser !== "admin") {
      return toast.error("Invalid User");
    }
    setUser(newUser);
  };

  const logout = () => setUser("");

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

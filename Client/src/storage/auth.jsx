import { createContext, useContext,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const storeTokeninLS = (servertoken) => {
    return localStorage.setItem("Token", servertoken);
  };

  const isLoggedIN = !!token;
  const LogOutUser = () => {
    setToken("");
    return localStorage.removeItem("Token");
  };

  return (
    <AuthContext.Provider value={{ storeTokeninLS,isLoggedIN,LogOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import { createContext, useContext,useEffect,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [detail, setDetail] = useState("")

  const storeTokeninLS = (servertoken) => {
    return localStorage.setItem("Token", servertoken);
  };

  const userAuthentication=async()=>{
      try {
        const response = await fetch("http://localhost:3000/user",{
          method:"GET",
          headers:{
            "Authorization":`Bearer ${token}`
          },
        })
        if(response.ok){
          const data = await response.json();
          setDetail(data.userData)
        }
      } catch (error) {
        console.log("error fetching in data")
      }
  }

  useEffect(()=>{
    userAuthentication()
  },[])

  const isLoggedIN = !!token;

  const LogOutUser = () => {
    setToken("");
    return localStorage.removeItem("Token");
  };

  return (
    <AuthContext.Provider value={{ storeTokeninLS,isLoggedIN,LogOutUser,detail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

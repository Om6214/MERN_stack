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

  // to get the products at the frontend

  const [data, setdata] = useState([])

  const getServices= async()=>{
    const response = await fetch("http://localhost:3000/service/products",{
      method:"GET"
    })
    if(response.ok){
      const data = await response.json()
      console.log(data.msg)
      setdata(data.msg)
    }
  }

  useEffect(()=>{
    getServices()
    userAuthentication()
  },[])

  const isLoggedIN = !!token;

  const LogOutUser = () => {
    setToken("");
    return localStorage.removeItem("Token");
  };

  return (
    <AuthContext.Provider value={{ storeTokeninLS,isLoggedIN,LogOutUser,detail ,data}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

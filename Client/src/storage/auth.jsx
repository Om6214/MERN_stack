import { createContext, useContext,useEffect,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [detail, setDetail] = useState("")
  const [isAdmin, setisAdmin] = useState(false)

  const storeTokeninLS = (servertoken) => {
    setToken(servertoken)
    return localStorage.setItem("Token", servertoken);
  };

  const userAuthentication=async()=>{
      try {
        const response = await fetch("https://mern-stack-1-hjpa.onrender.com/user",{
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


  const adminAuth = async()=>{
    try {
      const response = await fetch("https://mern-stack-1-hjpa.onrender.com/admin/getusers",{
        method:"GET",
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      if(response.ok){
        setisAdmin(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // to get the products at the frontend

  const [data, setdata] = useState([])

  const getServices= async()=>{
    const response = await fetch("https://mern-stack-1-hjpa.onrender.com/service/products",{
      method:"GET"
    })
    if(response.ok){
      const data = await response.json()
      setdata(data.msg)
    }
  }

  useEffect(()=>{
    getServices()
    userAuthentication()
    adminAuth()
  },[])

  const isLoggedIN = !!token;

  const LogOutUser = () => {
    setToken("");
    setisAdmin(false)
    return localStorage.removeItem("Token");
    
  };

  return (
    <AuthContext.Provider value={{ storeTokeninLS,isLoggedIN,LogOutUser,detail ,data ,isAdmin}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const storeTokeninLS=(servertoken)=>{
        return localStorage.setItem('Token',servertoken)
    }
    return(
        <AuthContext.Provider value={{storeTokeninLS}} >
            {children}
        </AuthContext.Provider>

    );
}

export const useAuth=()=>{
    return useContext(AuthContext)
}
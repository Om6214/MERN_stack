import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const storetkeninLS=()=>{
        return localStorage.setItem('Token',servertoken)
    }
    return(
        <AuthContext.Provider value={{storetkeninLS}} >
            {children}
        </AuthContext.Provider>

    );
}

export const useAuth=()=>{
    return useContext(useAuth)
}
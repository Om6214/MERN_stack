
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../storage/auth'
import { useEffect } from 'react';


const Logout = () => {
    const {LogOutUser} = useAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        LogOutUser()
        navigate('/login')
    },[LogOutUser,navigate])

    
  return null
}

export default Logout
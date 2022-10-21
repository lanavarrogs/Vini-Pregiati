import { useState,useEffect,createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  
  const [auth,setAuth] = useState({})

  useEffect(() => {
    
    const autenticarUsuario = async() => {
      const token = localStorage.getItem('token')
      if(!token) return;
      
      const config = {
        headers:{
          "Accept" : "application/json"
        },
        session:{
          "token": token
        }
      }
      
      try {
        const { data } = await axios.post('http://localhost:8080/api/user',config)
        console.log(data);
      } catch (error) {
        
      }

    }
    autenticarUsuario() 
  },[])

  return(
    <AuthContext.Provider
      value={{
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}

export {
  AuthProvider
}

export default AuthContext;
import { useState,useEffect,createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  
  const [auth,setAuth] = useState({})
  const [loading,setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    
    const autenticarUsuario = async() => {
      const token = localStorage.getItem('token')
      if(!token){
        setLoading(false)
        return
      }

      
      const config = {
        headers:{
          "Accept" : "application/json"
        },
        session:{
          "token": token
        }
      }
      
      try {
        const { data } = await axios.post('http://vinipregati.eastus.cloudapp.azure.com:8080/api/user',config) 
        setAuth(data)
        navigate('/')
      } catch (error) {
        setAuth({})
      }
      
      setLoading(false)
      


    }
    autenticarUsuario() 
  },[])

  return(
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading
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
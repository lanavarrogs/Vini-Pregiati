import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
        const { data } = await axios.post('https://502a-2806-107e-13-6a40-3964-ba0e-53db-d97f.ngrok.io/api/user',config) 
        setAuth(data)
        navigate('/')
      } catch (error) {
        setAuth({})
      }
      
      setLoading(false)
      


    }
    autenticarUsuario() 
  },[])


  const logout = async () =>{
    
    try {
      const { data } = await axios.post('https://502a-2806-107e-13-6a40-3964-ba0e-53db-d97f.ngrok.io/api/auth/signout')
      console.log(data)
      localStorage.removeItem('token')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
    
  }

  return(
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        logout
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
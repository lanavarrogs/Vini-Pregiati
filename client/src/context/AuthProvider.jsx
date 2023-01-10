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
        const { data } = await axios.post('https://6a7e-2806-265-3484-802a-6d3c-82d1-e019-bab2.ngrok.io/api/user',config) 
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
      const { data } = await axios.post('https://6a7e-2806-265-3484-802a-6d3c-82d1-e019-bab2.ngrok.io/api/auth/signout')
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
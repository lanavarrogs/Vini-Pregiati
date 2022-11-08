import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import clienteAxios from "../config/clienteAxios"
import axios from 'axios'
import useAuth from "../hooks/useAuth"



const Login = () => {


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [alerta,setAlerta] = useState({})
  
  const navigate = useNavigate()

  const { setAuth } = useAuth();
  
  const handleSubmit = async e => {
    e.preventDefault();

    if([email,password].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
    }
    

    try {
      const { data } = await axios.post('http://vinipregati.eastus.cloudapp.azure.com:8080/api/auth/signin',{email,password})
      if(data.token){
        localStorage.setItem('token',data.token)
        setAuth(data)
        navigate('/profile')
      }
    
    
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <h1 className="text-white font-black text-6xl text-center">Inciar Sesion</h1>
      <form 
        className="my-10 bg-white shadow rounded-lg p-5 "
        onSubmit={handleSubmit}
        >
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >Email</label>
          <input
            type='email'
            placeholder="Correo electronico"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >Password</label>
          <input
            type='password'
            placeholder="Password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"        
            value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>

        <input
          type="submit"
          value="Iniciar Sesion"
          className="bg-[#F22E4B] w-full py-3 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors"
        />
      </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-slate-200 uppercase text-sm"
            to="/auth/register"
          >No tienes Cuenta? Registrate</Link>

          <Link
            className="block text-center my-5 text-slate-200 uppercase text-sm"
            to="/forgot-password"
          >Olvidaste tu contraseña</Link>

        </nav>

    </> 
  )
}

export default Login
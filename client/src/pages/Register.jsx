import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import Swal from 'sweetalert2'

import axios from 'axios'


const Register = () => {
  
  const [nombre,setNombre] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [ alerta,setAlerta ] = useState({})


  const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


  const handleSubmit = async e => {
    e.preventDefault();

    if([nombre,email,password,confirmPassword].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    } 
    
    if(password !== confirmPassword){
      setAlerta({
        msg: 'Los password no son iguales',
        error: true
      })
      return;
    }

    if(password.length < 8){
      setAlerta({
        msg: 'Los password no son iguales',
        error: true
      })
    }

    setAlerta({})

    //Register the user with the api connection
    let username = nombre;
    try {
      const { data } = await axios.post('http://localhost:8080/api/auth/signup', {username,email,password} )
      
      setNombre('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      
      Toast.fire({
        icon:'success',
        title: data.message
      })

    } catch (error) {
      console.log(error)
    }


  }

  const message = alerta.msg

  return (
    <>
      <h1 className="text-white font-black text-6xl text-center">Crear Cuenta</h1>
      
      {message  && <Alerta alerta={alerta}/>}

      <form 
          className="my-10 bg-white shadow rounded-lg p-5"
          onSubmit={handleSubmit}
          >
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >Nombre</label>
          <input
            type='text'
            placeholder="Ingresa tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
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
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="confirm-password"
          >Password</label>
          <input
            type='password'
            placeholder="Repite el passowrd"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Registrarse"
          className="bg-[#F22E4B] w-full py-3 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors"
        />
      </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-slate-200 uppercase text-sm"
            to="/auth"
          >Ya tienes cuenta? Incia sesion</Link>

        </nav>

    </> 
  )
}

export default Register
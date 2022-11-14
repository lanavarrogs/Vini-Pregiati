import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const Profile = () => {

  const { auth, logout } = useAuth();



  return (
      <>
        { auth._id || auth.id  
        
        ?
        <div className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
          <div className='md:w-2/3 lg:w-4/5'>
            <h1 className="text-white font-black text-6xl text-center">Perfil</h1>
            <div className='my-10 bg-white shadow rounded-lg p-5'>
              <div className='m-4'>
              <h2 className='text-2xl font-bold text-gray-600 block'>Nombre de Usuario</h2>
              <p className='my-3 text-xl capitalize font-bold'>
                {auth.username}
              </p>
              <h2 className='text-2xl font-bold text-gray-600 block'>Correo Electronico</h2>
              <p className='my-3 text-xl capitalize font-bold'>
                {auth.email}
              </p>
              <button className="bg-[#F22E4B] w-full py-3 my-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors" onClick={logout}>Cerrar Sesion</button>
              </div>
            </div>
          </div>
        </div>
        
        : <Navigate to='/auth' /> }
      </>
    )
}

export default Profile
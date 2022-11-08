import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Carrito = () => {

  const { auth } = useAuth()
  


  return (
    <>
      { auth._id || auth.id ? 'Autenticado' : <Navigate to='/auth' /> }
    </>
  )
}

export default Carrito
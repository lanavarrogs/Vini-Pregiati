import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Carrito = () => {

  const { auth,cargando } = useAuth()
  

  if(cargando) return 'Cargando...'

  return (
    <>
      { auth._id  ? 'Autenticado' : <Navigate to='/auth' /> }
    </>
  )
}

export default Carrito
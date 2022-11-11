import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useCart from '../hooks/useCart'
import ListCart from '../components/ListCart'

const Carrito = () => {

  const { auth } = useAuth();
  const { carItems } = useCart();

  return (
    <>
      { auth._id || auth.id 
      
      ? 
      <div className='container mx-auto '>
        <h2 className='text-white font-black text-6xl text-center mt-10'>Carrito</h2>
        <ListCart
          carItems={carItems}
        />
      </div>
      : 
      <Navigate to='/auth' /> }
    </>
  )
}

export default Carrito
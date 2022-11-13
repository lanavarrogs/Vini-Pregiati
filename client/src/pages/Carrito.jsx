import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useCart from '../hooks/useCart'
import ListCart from '../components/ListCart'

const Carrito = () => {

  const { auth } = useAuth();
  const { carItems,totalPrice } = useCart();

  return (
    <>
      { auth._id || auth.id 
      
      ?
      <div className='container mx-auto '>
        <h2 className='text-white font-black text-6xl text-center mt-10'>Carrito</h2>
        <ListCart
          carItems={carItems}
        />
        <div className='flex items-center flex-col' >
          <p className='text-[#58D7C4] text-4xl my-5'>${totalPrice.toFixed(2)}</p>
          <button className="bg-[#F22E4B] w-5/6 md:w-1/3 p-3 m-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors">Comprar</button>
        </div>
        
      </div>
      : 
      <Navigate to='/auth' /> }
    </>
  )
}

export default Carrito
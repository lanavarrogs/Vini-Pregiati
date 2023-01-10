import React from 'react'
import { Navigate } from 'react-router-dom'

import ListCart from '../components/ListCart'
import Swal from 'sweetalert2'
import axios from 'axios'

import useAuth from '../hooks/useAuth'
import useCart from '../hooks/useCart'


const Carrito = () => {

  const { auth } = useAuth();
  const { carItems, setCarItems , totalPrice, } = useCart();

  const purchase = async () => {
    if(carItems.length <=0 ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El carrito debe contener al menos un item',
      })
    }else{
      try {
          const { data } = await axios.post('https://502a-2806-107e-13-6a40-3964-ba0e-53db-d97f.ngrok.io/api/purchase', {id: auth.id , products: carItems})
          if(data.message === 'purchase created'){
            Swal.fire({
              icon: 'success',
              title: 'Felicitaciones por su compra',
              text: 'Compra realizada con exito',
            })
          }
          setCarItems([])
          localStorage.removeItem('carProducts')
      } catch (error) {
        console.log(error)
      }
    }
  
  }

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
          <button className="bg-[#F22E4B] w-5/6 md:w-1/3 p-3 m-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors" onClick={purchase}>Comprar</button>
        </div>
        
      </div>
      : 
      <Navigate to='/auth' /> }
    </>
  )
}

export default Carrito
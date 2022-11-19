import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import useCatalog from '../hooks/useCatalog';
import useCart from '../hooks/useCart';
import wine from '../assets/white_wine.png';
import Swal from 'sweetalert2';

const Descrption = () => {

  const params = useParams();

  const { product,obtenerProducto } = useCatalog()
  const { addItem,carItems} = useCart()

  useEffect(() => {
    obtenerProducto(params.id)
  },[])

  const checkStock = () => {  
      

      const product_stock = carItems.find(productInCart => product.code === productInCart.code)
      
      if(product_stock){
        let stock = product.stock - product_stock.amount
        
        if(stock > 0){
          addItem(product)
        }else{
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El producto que desea agregar se encuentra Agotado, Por favor pongase en contacto para atender su pedido',
          })
        }
      }else{
        addItem(product)
      }

  }

  return (
    <div className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
      <div className='md:w-2/3 lg:w-4/5'>
        <h1 className="text-white font-black text-6xl text-center capitalize">{product.name}</h1>
        <div className='my-10 bg-white shadow rounded-lg p-5 md:flex md:justify-center'>
          <div className='w-1/3'>
            <img src={ wine } className='h-[350px]'/>
          </div>
          <div className='p-3 ml-10 w-5/6'>
            <h3 className='font-bold text-2xl'>Descripción:</h3>
            <p className='text-lg my-5'>{product.description}</p>
            <p className='font-bold text-2xl'>Precio:</p>
            <p className='text-[#58D7C4] text-xl mb-10'>${product.price}</p>
            <button className='bg-[#F22E4B] p-3 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors text-center' onClick={checkStock}>Agregar al carrito</button>
            <Link to='/catalogo'>Regresar</Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Descrption
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import useCatalog from '../hooks/useCatalog';
import wine from '../assets/white_wine.png'


const Descrption = () => {

  const params = useParams();

  const { product,obtenerProducto } = useCatalog()
  useEffect(() => {
    obtenerProducto(params.id)
  },[])

  

  return (
    <div className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
      <div className='md:w-2/3 lg:w-4/5'>
        <h1 className="text-white font-black text-6xl text-center capitalize">{product.name}</h1>
        <div className='my-10 bg-white shadow rounded-lg p-5 md:flex md:justify-center'>
          <div className='w-1/3'>
            <img src={ wine } className='h-[350px]'/>
          </div>
          <div className='p-3 ml-10 w-5/6'>
            <h3 className='font-bold text-2xl'>Descripcion:</h3>
            <p className='text-lg my-5'>{product.description}</p>
            <p className='font-bold text-2xl'>Precio:</p>
            <p className='text-[#58D7C4] text-xl mb-10'>${product.price}</p>
            <button className='bg-[#F22E4B] p-3 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors text-center'>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Descrption
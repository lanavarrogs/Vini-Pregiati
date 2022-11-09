import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Product from '../components/Product';
import useCatalog from '../hooks/useCatalog';



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
        
      </div>
    </div>
    
  )
}

export default Descrption
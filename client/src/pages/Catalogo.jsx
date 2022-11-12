import { useEffect } from 'react'
import ListWines from '../components/ListWines'
import useCatalog from '../hooks/useCatalog'

const Catalogo = () => {
  
  const { catalog } = useCatalog()

  return (
    <div className='container mx-auto '>
      <h2 className='text-white font-black text-6xl text-center mt-10'>Catálogo principal</h2>
      <ListWines catalogo={catalog}/>
    </div>
  )
}

export default Catalogo
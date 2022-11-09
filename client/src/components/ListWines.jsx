import React from 'react'
import Wine from './Wine'

const ListWines = ({catalogo}) => {

  return (
    <div  className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center '>
      <div className='md:grid grid-cols-3 gap-3'>
        {catalogo.map( (producto,index) => (
          <Wine
            key={index}
            producto={producto}
          />
        ))}
      </div>
    </div>
  )
}

export default ListWines
import React from 'react'
import { Link } from 'react-router-dom'
import Wine from './Wine'

const ListWines = () => {
  return (
    <div  className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center '>
      <div className='md:grid grid-cols-3 gap-3'>
        <Link to={'/description/1'}>
          <Wine/>
        </Link>
        <Wine/>
        <Wine/>
        <Wine/>
        <Wine/>
      </div>
    </div>
  )
}

export default ListWines
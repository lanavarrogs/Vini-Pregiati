import React from 'react'
import { Link } from 'react-router-dom'
import wine from '../assets/white_wine.png'

const Wine = ({producto}) => {
  
  const { name, code, price } = producto

  return (
        <div className='border-2 rounded-lg md:flex mt-4 p-5'>
          <img src={wine} />
          <div className='md:flex md:flex-col'>
              <h3 className='text-white font-bold text-xl capitalize mb-4'>{name}</h3>
              <p className='text-white opacity-50 text-lg'>750ml</p>
              <p className='text-[#58D7C4] mt-2 mb-5 text-2xl'>{`$${price}`}</p>
              <Link className='bg-[#F22E4B] w-full p-3 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors text-center' to={`/description/${code}`}>Ver mas</Link>
          </div>
        </div>
    )
}

export default Wine
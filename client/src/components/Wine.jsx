import React from 'react'
import { Link } from 'react-router-dom'
import wine from '../assets/white_wine.png'

const Wine = () => {
  return (
        <div className='border-2 rounded-lg md:flex mt-4 p-5'>
          <img src={wine} />
          <div >
              <h3 className='text-white font-bold text-xl'>Vino Rojo</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum totam dolorem quibusdam sapiente ipsum nam, suscipit velit labore adipisci odio exercitationem non, quam harum saepe expedita alias accusamus itaque vel?</p>
              <p className='text-[#58D7C4]'>$560.55</p>
              <Link className='flex justify-end m-3 ' to={'/description/1'}>Ver mas</Link>
          </div>
        </div>
    )
}

export default Wine
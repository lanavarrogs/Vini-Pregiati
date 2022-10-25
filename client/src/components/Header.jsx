import { useState } from 'react'
import {  Link,NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../App.css'


const Header = () => {
  
  let activeClassName = "highlighted";

  return (
      <div className='flex h-24 items-center m-4 justify-between'>
        <div>
          <Link>
            <img className='object-contain h-24' src={logo} />
          </Link>
          
        </div>
        
        <nav className='text-white font-bold'>
          <ul className='flex'>
            <li className='mx-5 '>
              <NavLink
                to = '/'
                className={({ isActive }) =>
              isActive ? activeClassName : ''
            }
            end
              >Inicio</NavLink>
            </li>
            <li className='mx-5'>
              <NavLink
                to = '/quienes-somos'
                className={({ isActive }) =>
              isActive ? activeClassName : ''
            }
              >Quienes Somos</NavLink>
            </li>
            <li className='mx-5'>
              <NavLink
                to = '/catalogo'
                className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
              >Catalogo</NavLink>
            </li>
            <li className='mx-5'>
              <NavLink
                to = '/contactanos'
                className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
              >Contactanos</NavLink>
            </li>
          </ul>
        </nav>


        <div>
          <ul className='flex'>
            <li className='mx-5'>
                <p>Buscar</p>
            </li>
            <li className='mx-5'>
                <p>Carrito</p>
            </li>
            <li className='mx-5'>
                <p>Perfil</p>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Header
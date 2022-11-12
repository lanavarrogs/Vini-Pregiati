import {  Link,NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import logo from '../assets/LOGO.png'
import '../App.css'


import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {

  let activeClassName = "highlighted";

  const { auth } = useAuth();


  return (
      <header className='shadow-md w-full'>
        <div className='md:flex md:justify-between items-center'>

          <div>
            <Link to='/'>
              <img className='object-contain h-24' src={logo} /> 
            </Link>
          </div>
          
          <nav className='text-white md:flex'>
            <ul className='flex flex-col items-center md:flex-row'>
              <li className='mx-5 '>
                <NavLink
                  to = '/'
                  className={({ isActive }) =>
                isActive ? activeClassName : ''
              }
              end
                >Inicio</NavLink>
              </li>
              <li className='m-2 md:mx-5'>
                <NavLink
                  to = '/quienes-somos'
                  className={({ isActive }) =>
                isActive ? activeClassName : ''
              }
                >Quienes Somos</NavLink>
              </li>
              <li className='m-2 md:mx-5'>
                <NavLink
                  to = '/catalogo'
                  className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
                >Catalogo</NavLink>
              </li>
              <li className='m-2 md:mx-5'>
                
                <NavLink
                  to = '/contactanos'
                  className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
                >Contáctanos</NavLink>
              </li>
              
              <li className='m-2 md:hidden'>
                <NavLink
                  to = '/carrito'
                  className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
                >Carrito</NavLink>
              </li>


              <li className='m-2 md:hidden'>
                
                <NavLink
                  to = '/profile'
                  className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
                >Perfil</NavLink>
              </li>

            </ul>

            <ul className=' md:flex hidden md:items-center '>
              <li className='mx-5'>
                <SearchIcon/>
              </li>
              <li className='mx-5'>
                  <Link to='/carrito'>
                    <ShoppingBagIcon/>
                  </Link>
              </li>
              <li className='mx-5'>
                  <Link to={auth._id || auth.id ? `/profile` : '/auth'}>
                    <AccountCircleIcon/>
                  </Link>
              </li>
            </ul>

          </nav>



        </div>
      </header>
    )
}

export default Header
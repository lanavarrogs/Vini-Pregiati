import {  Link,NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../App.css'


import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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


        <div className='text-white'>
          <ul className='flex'>
            <li className='mx-5'>
              <SearchIcon/>
            </li>
            <li className='mx-5'>
                <ShoppingBagIcon/>
            </li>
            <li className='mx-5'>
                <Link to="/auth">
                  <AccountCircleIcon/>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Header
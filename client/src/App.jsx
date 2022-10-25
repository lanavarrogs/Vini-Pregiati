import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';

import { AuthProvider } from './context/AuthProvider';

import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Catalogo from './pages/Catalogo';
import Contactanos from './pages/Contactanos';


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/auth/" element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            </Route>

          <Route path="/" element={<HomeLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/quienes-somos' element={<QuienesSomos/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/> 
            <Route path='/contactanos' element={<Contactanos/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

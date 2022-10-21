import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';

import { AuthProvider } from './context/AuthProvider';

import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';


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
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const Profile = () => {

  const { auth } = useAuth();

  return (
      <>
        { auth._id  ? 'Autenticado' : <Navigate to='/auth' /> }
      </>
    )
}

export default Profile
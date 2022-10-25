import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const HomeLayout = () => {
  return (
    <>
      <Header/>
      <main className='container mx-auto mt-2 md:mt-10'>
        <Outlet/>
      </main>
    </>
  )
}

export default HomeLayout
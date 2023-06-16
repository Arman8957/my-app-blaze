import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import NavigationBar from '../Pages/Shared/Navbar/NavigationBar'

const Main = () => {
  return (
    <div>
      <div className='xl:px-52 lg:px-20 md:px-24 px-2'>
        <NavigationBar />
      </div>
      <Outlet />
      <div className='xl:px-52 lg:px-20 md:px-24 px-2'>
        <Footer />
      </div>
    </div>
  )
}

export default Main
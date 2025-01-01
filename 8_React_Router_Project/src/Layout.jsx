import React from 'react'
import { Outlet } from "react-router-dom" // This utility will use this layout as a base and wherever there is outlet you can change it 
import { Header } from './components'
import { Footer } from './components'


function Layout() {
  return (
    <>
    {/* header is fixed */}
    <Header /> 

    {/* outlet given here means this part will change */}
    <Outlet />  
    
    {/* footer is fixed */}
    <Footer />
    
    </>
  )
}

export default Layout
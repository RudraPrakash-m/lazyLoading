import React from 'react'
import Nav from '../components/ui/nav/Nav'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main>
        <Nav/>
        <Outlet/>
    </main>
  )
}

export default MainLayout
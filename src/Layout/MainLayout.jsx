import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar  from '../components/Navbar'; //Because navbar should be in all pages

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default MainLayout
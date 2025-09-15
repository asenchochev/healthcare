import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails'

const Routers = () => {
  return <>
    <Home />
    <Services />
    <Login />
    <Register />
    <Doctors />
    <DoctorsDetails />
  </>
}

export default Routers

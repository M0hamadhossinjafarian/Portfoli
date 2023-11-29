import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Homepage from './Pages/Homepage'

export default function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <Routes>
      <Route path='/' to={<Homepage/>}/>
      <Route path='/project' />
      <Route path='/contact' />
      <Route path='/about' />

    </Routes>
    
    </>
  )
}

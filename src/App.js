import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Homepage from './Pages/Homepage'
import Projectpage from './Pages/Projectpage'
import Aboutpage from './Pages/Aboutpage'

export default function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/project' element={<Projectpage/>} />
      <Route path='/contact' />
      <Route path='/about' element={<Aboutpage/>} />
<Route path='*' />
    </Routes>
    
    </>
  )
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [nav,setnav]=useState(false)
    function handlenav(){
setnav(!nav)
    }

   
  return (
    <>
        <nav className={`flex `}>
            <div className='w-full h-16 flex flex-row mt-6 flex-end'>
                <Link id='up' to={'/'} className='ml-20  pt-2 text-3xl tnav'>Mohamad.dev</Link>
                <div className='p-5 ml bg-white rounded-2xl mr-28' onClick={handlenav}>
                <img className='w-7 pt-1  ' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64ab2b9c5575bed150c67316_Menu1.svg" alt="" />

                </div>
            </div>
          
        </nav>
        <motion.div animate={{'y':-1000}}  whileInView={{'y':0}} transition={{'duration':0.7}} className={`h-full w-full z  text-center text-6xl line ${nav?'show':'disable'}` }>
        <Link to={'/'}>PORTFOLIO</Link>
        <Link to={'/project'}>PROJECT  </Link>
        <a href='#footer'>CONTACT  </a>
        <Link to={'/about'}>ABOUT    </Link>
            </motion.div> 
    </>
  )
}

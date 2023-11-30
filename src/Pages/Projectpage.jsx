import React from 'react'
import Section4 from './Section4'
import Section5 from './Section5'
import Section3 from './Section3'

export default function Projectpage() {
  return (
    <>
   <div className='mt-40'>
   <h2 className='text-center text-6xl mt-2 '>Projects</h2>
    <br /><br />
    <div className='w-full  h flex flex-row mt-32 flex-wrap  overflow-hidden'>
        <div className='w relative overflow-hidden'>
<img className='w-full h2 '  src="https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp" alt="" />
      <h2 className='text-4xl ml-20 mt-6'>PROPERTY</h2>
      {/* <box-icon name='right-arrow-alt' style={{backgroundColor:"white",width:'50px',height:'50px',borderRadius:'70px',position:'absolute',top:' 69%',left: '87%'}} color='black' ></box-icon>      */}
         </div>
         <div className='w relative ml-14 mtt'>
<img className='w-full h2  '  src="https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp" alt="" />
      <h2 className='text-4xl ml-20 mt-6'>RESTURANTO</h2>
      {/* <box-icon name='right-arrow-alt' style={{backgroundColor:"white",width:'50px',height:'50px',borderRadius:'70px',position:'absolute',top:' 69%',left: '87%'}} color='black' ></box-icon>      */}
         </div>
         <div className={`w relative mt-10 `}>
<img className='w-full h2 ' src="https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp" alt="" />
      <h2 className='text-4xl ml-20 mt-6'>SportFix</h2>
      {/* <box-icon name='right-arrow-alt' style={{backgroundColor:"white",width:'50px',height:'50px',borderRadius:'70px',position:'absolute',top:' 69%',left: '87%'}} color='black' ></box-icon>      */}
         </div>
         <div className='w relative ml-14 mtt mt-10'>
<img className='w-full h2 '  src="https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp" alt="" />
      <h2 className='text-4xl ml-20 mt-6'>PROPERTY</h2>
      {/* <box-icon name='right-arrow-alt' style={{backgroundColor:"white",width:'50px',height:'50px',borderRadius:'70px',position:'absolute',top:' 69%',left: '87%'}} color='black' ></box-icon>      */}
         </div>
    </div>  
   </div>
    <Section4/>
    <Section5/>
    </>
  )
}

import React,{useEffect,useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import 'boxicons'

gsap.registerPlugin(ScrollTrigger)

export default function Section2() {
    const ref11=useRef()
    useEffect(()=>{
        const el=ref11.current
        gsap.fromTo(el,{marginTop:'0px'},{marginTop:'400px',scrollTrigger:{
            trigger:el,
            scrub:1,
        }})
    },[])

     

    const ref6=useRef()
    useEffect(()=>{
        const el6=ref6.current
        gsap.fromTo(el6,{  rotateX:('0deg') },{rotateX:('180deg'),scrollTrigger:{
            trigger:'.box',
            scrub:1,
            start:'top 20%',
            end:'top 49%',
        }})
    },[])
  return (
    <>

    <div className='w-full height-  relative card mt '   >
    <h2 className='absolute top text-7xl '>I CAN DO</h2>

    <div class="container ">
  <div class="deck">
    <div class="card hovercard -mt-14  " ref={ref6} >
      <div class="front face flex flex-row flex-w space">
        <div class="text-center mt-8 text-4xl h-44 flex-w absolute">
FRONTEND DEVELOPMENT
        </div>
       <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>HTML</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>CSS</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24 '>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Javascript</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Git,Github</h2>
        <p>Basic</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 ml-0'>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24 flex-w'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>React</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Tailwind</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24 '>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>MUI</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Scass</h2>
        <p>Basic</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 flex-w'>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Bootstarp</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>framer motion</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24 '>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Gsap</h2>
        <p>Intermediate</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>PWA</h2>
        <p>Intermediate</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 mr-14'>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>Next js</h2>
        <p>basic</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>Three js</h2>
        <p>Intermediate</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24 '>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Formik</h2>
        <p>Experience</p>
        </div>
        <div className='w-1/3 h-40  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>Chart js</h2>
        <p>Intermediate</p>
        </div>
        </div>
      </div>
      <div class="back face">
      <div class="text-center mt-72 ml-44 text-4xl h-44  absolute">
Backend DEVELOPMENT
        </div>
       <div className='flex flex-row mt-72 '>
       
        <div className='w-1/3 h-24  flex-col flex-wrap  ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <p>Experience</p>

        <h2 className='text-lg font-semibold'>Node js</h2>
        </div>
        <div className='w-1/3 h-24  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>
        <p>Experience</p>
        <h2 className='text-lg font-semibold'>Mongo</h2>
      
        </div>
        <div className='w-1/3 h-24  flex-col flex-wrap ml-24 '>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>
        <p>Experience</p>

        <h2 className='text-lg font-semibold'>Express</h2>
        </div>
        <div className='w-1/3 h-24  flex-col flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <p>Basic</p>
        <h2 className='text-lg font-semibold'>Git,Github</h2>
        </div>
        </div>
</div>
        <div class="botprice">
        </div>
      </div>
    </div>
  </div>
</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<div className='box -mt-96' ></div>








<div className='w-full min-h flex flex-row flex-wrap -mt-96 fro'>
<div className='mt-24 flex flex-row flex-wrap'>
    <h2 className='m-auto -mt-10 text-2xl h23'>FRONTEND DEVELOPMENT</h2>
<div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>HTML</h2>
        <p>Experience</p>
        </div>
        </div>
        
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Next</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-max h-40 carddd  flex-row flex-wrap ml-20 '>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>CSS</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-max h-40 carddd flex-row flex-wrap ml-24 -pl-20'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold '>JAVASCRIPT</h2>
        <p>Experience</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>REACT</h2>
        <p>Experience</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>TAILWIND</h2>
        <p>Experience</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>HTML</h2>
        <p>Experience</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>MUI</h2>
        <p>Experience</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>SCASS</h2>
        <p>Experience</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>PWA</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>CHART JS</h2>
        <p>Experience</p>
        </div>
        </div>
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>FORMIK</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>GIT,Github</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'>Bootstrap</box-icon>

        <h2 className='text-lg font-semibold'>FORMIK</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>Gsap</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>Framer motion</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>Three js</h2>
        <p>Experience</p>
        </div>
        </div>
        
        
</div>
</div>








<div className='w-full min-h flex flex-row flex-wrap -mt-96 bac'>
<div className='mt-24 flex flex-row flex-wrap'>
    <h2 className='m-auto -mt-10 text-2xl h23'>BACKEND DEVELOPMENT</h2>
<div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>NODE JS</h2>
        <p>Experience</p>
        </div>
        </div>
        
        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-1/3 h-40 carddd flex-row flex-wrap ml-24'>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold'>MONGO</h2>
        <p>Experience</p>
        </div>
        </div>

        <div className='flex flex-col mt-40 -ml flex-w'>
        <div className='w-max h-40 carddd  flex-row flex-wrap ml-20 '>
        <box-icon name='check-circle' color='#fffcfc' id='icon'></box-icon>

        <h2 className='text-lg font-semibold w-max'>EXPRESS</h2>
        <p>Experience</p>
        </div>
        </div>



        </div>
        </div>
    </>
  )
}

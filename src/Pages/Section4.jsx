import React,{useEffect,useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
gsap.registerPlugin(ScrollTrigger)
export default function Section4() {
  const reft=useRef()
  useEffect(()=>{
      const elt=reft.current
      gsap.fromTo(elt,{top:'0%' },{top:'10%',scrollTrigger:{
          trigger:elt,
          scrub:1,
          
      }}
      )
  },[])
  const ref=useRef()
  useEffect(()=>{
      const el=ref.current
      gsap.fromTo(el,{top:'0%' },{top:'10%',scrollTrigger:{
          trigger:el,
          scrub:1,
          
      }}
      )
  },[])
  const ref2=useRef()
  useEffect(()=>{
      const el2=ref2.current
      gsap.fromTo(el2,{top:'40%'},{top:'10%',scrollTrigger:{
          trigger:el2,
          scrub:1,
          
      }}
      )
  },[])
  
  const ref3=useRef()
  useEffect(()=>{
      const el3=ref3.current
      gsap.fromTo(el3,{top:'80%' },{top:'10%',scrollTrigger:{
          trigger:el3,
          scrub:1,
          
      }}
      )
  },[])
  const ref4=useRef()
  useEffect(()=>{
      const el4=ref4.current
      gsap.fromTo(el4,{top:'120%'},{top:'10%',scrollTrigger:{
          trigger:el4,
          scrub:1,
          
      }}
      )
  },[])
  return (
    <>
    <br /><br /><br />
    <div className='w-full h3 flex flex-col relative mt-96'>
      <div className='text-7xl ml-10 mt-40 sticky ss' ref={reft}>     MY REVIEWS</div>
<div className='flex flex-col h3  w-full '>
<div className=' w2 ml-14  bg-white sticky top1 text-black flex flex-col mt-20 shadow hh hi' ref={ref}>
<div className='flex ml-10 mt-6'>
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
</div>
<p className='color mt-10 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit.quod blanditiis eum? Dolorum odio enim fuga ut doloremque a consequatur.</p>
<div className='flex'>
  <img className='rounded w-20 mt-5' src="https://assets.website-files.com/64f800f7542bef04bb59898b/64f8204dac4d6ff1340020f5_jimmy-fermin-bqe0J0b26RQ-unsplash-p-500.jpg" alt="" />
  <h2 className='color text-3xl mt-10 ml-6'>Jack</h2>
</div>
</div>
<div className=' w2 ml-14  bg-white sticky top2 text-black flex flex-col mt-20 shadow hh' ref={ref2}>
<div className='flex ml-10 mt-6'>
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
</div>
<p className='color mt-10 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit.quod blanditiis eum? Dolorum odio enim fuga ut doloremque a consequatur.</p>
<div className='flex'>
  <img className='rounded w-20 mt-5' src="https://assets.website-files.com/64f800f7542bef04bb59898b/64f8204dac4d6ff1340020f5_jimmy-fermin-bqe0J0b26RQ-unsplash-p-500.jpg" alt="" />
  <h2 className='color text-3xl mt-10 ml-6'>Jack</h2>
</div>
</div>
<div className=' w2 ml-14  bg-white sticky top3 text-black flex flex-col mt-20 shadow hh' ref={ref3}>
<div className='flex ml-10 mt-6'>
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
</div>
<p className='color mt-10 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit.quod blanditiis eum? Dolorum odio enim fuga ut doloremque a consequatur.</p>
<div className='flex'>
  <img className='rounded w-20 mt-5' src="https://assets.website-files.com/64f800f7542bef04bb59898b/64f8204dac4d6ff1340020f5_jimmy-fermin-bqe0J0b26RQ-unsplash-p-500.jpg" alt="" />
  <h2 className='color text-3xl mt-10 ml-6'>Jack</h2>
</div>
</div>
<div className=' w2 ml-14  bg-white sticky top4 text-black flex flex-col mt-20 shadow hh' ref={ref4}>
<div className='flex ml-10 mt-6'>
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
<img className='w-7  h-max' src="https://uploads-ssl.webflow.com/64aad5363e57b0b9435969f7/64b072ddd0fa2f704f07803e_star%20full.svg" alt="" />
</div>
<p className='color mt-10 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit.quod blanditiis eum? Dolorum odio enim fuga ut doloremque a consequatur.</p>
<div className='flex'>
  <img className='rounded w-20 mt-5' src="https://assets.website-files.com/64f800f7542bef04bb59898b/64f8204dac4d6ff1340020f5_jimmy-fermin-bqe0J0b26RQ-unsplash-p-500.jpg" alt="" />
  <h2 className='color text-3xl mt-10 ml-6'>Jack</h2>
</div>
</div>
</div>
    </div>
    <div className='boc'></div>

    </>
  )
}

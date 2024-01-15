'use client'
import React from 'react'
import { motion } from 'framer-motion'
import myimg from '@/assets/Images/copyimg.png'
import Image from 'next/image'

function About() {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    className='flex flex-col relative w-full h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-center text-gray-500 text-2xl'>
        About
      </h3>
      <motion.div
      initial={{
        x:-200,
        opacity : 0
      }}
      transition={{
        duration : 1.2
      }}
      whileInView={{
        opacity:1, x:0
      }}
      viewport={{
        once:true
      }}
      
      className="w-1/2 h-40 mt-12 px-4 flex items-center justify-center"
      ><Image src={myimg} alt={'My Image'} width={400} height={450} className=' md:mb-0  rounded-full object-cover '/></motion.div>
      <div className="space-y-10 px-0 md:px-10 w-full">
        <h4 className='text-4xl font-semibold'>
            Here is a{" "}
            <span className='underline decoration-main_color/50'>little</span>{" "} background
        </h4>
        <p className='text-base'>HI I'm Shayan, let me introduce myself i Am a Full time website developer... i loves to code and passionate to learn from the daily Problems even its related to Life... or its related to my career in which the major contribution is of Programming... The Mission is not to Doge someOne but the Aim is Bring Ease in SomeOne Life through Delivering Him the Quality Work</p>
        <p className='text-gray-500 text-center text-base uppercase '><span className='text-main_color/40 '>"</span>Experience is the name everyone gives to their mistakes<span className='text-main_color/40'>"</span></p>
      </div>
    </motion.div>
  )
}

export default About

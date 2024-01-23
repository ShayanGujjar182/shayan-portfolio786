'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'
type Props = {
  pageInfo : PageInfo
}

function About({pageInfo}:Props) {
  
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
    className='flex flex-col relative w-full h-screen text-center md:text-left md:flex-row max-w-7xl xs:px-2 sm-px-4  md:px-10 xs:gap-2 md:justify-center mx-auto items-center'>
      <h3 className='absolute xs:top-14 lg:top-20 uppercase tracking-[20px] text-center text-gray-500 text-xl md:text-2xl'>

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
      
      className="w-1/2 h-40 mt-20 px-4 flex items-center justify-center"
      ><Image src={urlFor(pageInfo?.profilePic).url()} alt={'My Image'} width={400} height={450} className=' md:mb-0 w-[130px] h-[120px] sm:w-[160px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] l  rounded-full object-cover '/></motion.div>
      <div className="xs:space-y-6 md:space-y-10 px-0 md:px-10 w-full">
        <h4 className=' xs:text-xl sm:text-2xl  md:text-4xl font-semibold'>
            Here is a{" "}
            <span className='underline  decoration-main_color/50'>little</span>{" "} background
        </h4>
        <p className='text-base h-36 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-main_color/80 overflow-y-scroll overflow-x-hidden md:overflow-hidden md:scrollbar-none'>{pageInfo?.backgroundInformation}</p>
        <p className='text-gray-500 text-center text-xs md:text-base uppercase '><span className='text-main_color/40 '>"</span>Experience is the name everyone gives to their mistakes<span className='text-main_color/40'>"</span></p>
      </div>
    </motion.div>
  )
}

export default About

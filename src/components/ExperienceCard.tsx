'use client'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import myimg from '@/assets/Images/Hero Section.png'

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center justify-between  flex-shrink-0 w-[300px] md:w-[400px] xl:w-[800px] h-[80vh] bg-[#292929] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
      initial={{
        y : -100,
        opacity:0
      }}
      transition={{
        duration : 1.2
      }}
      whileInView={{
        opacity : 1, y :0
      }}
      viewport={{once : true}}
      className=' flex justify-center'
      // w-32 h-32 md:w-20 md:h-20  xl:w-[200px] xl:h-[200px]
      ><Image src={myimg}
      alt='' className='rounded-full  object-cover object-center' height={150} width={150}/></motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>CEO of PAPAFAM</h4>
        <p className='text-bold text-xl mt-1'>
            PAPAFAM
        </p>
        <div className='flex space-2 my-2'>
            {/* tech used */}
            {/* tech used */}
            {/* tech used */}
        </div>
        <p className='uppercase py-5 lg:py-2 text-gray-300'>started work... Ended</p>
        <ul className='list-disc space-y-4 lg:space-y-2 ml-5 text-lg'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard

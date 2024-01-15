'use client'
import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
function WorkExperience() {
  return (
    <motion.div
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3
        className='absolute top-20 lg:top-10 uppercase tracking-[20px]  text-gray-500 text-2xl'
        >Experience</h3>
        <div className='lg:mt-11 flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-main_color/80'>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        </div>
      
    </motion.div>
  )
}

export default WorkExperience

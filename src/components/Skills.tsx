'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

function Skills() {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[370px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center md:max-w-[550px] lg:max-w-[700px]'>
        <h3 className=' absolute top-20 lg:top-8 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
            </h3>
            <h4 className='absolute top-28 lg:top-16 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for a currency proficiency</h4>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-6 '>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
      
    </motion.div>
  )
}

export default Skills

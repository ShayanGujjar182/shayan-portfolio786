'use client'
import React from 'react'
import {motion} from 'framer-motion'
import SkillComp from './SkillComp'
import { Skill as SkillType } from '../../typings'

type Props = {
  Skill  : SkillType[]
}

function Skills({Skill} : Props) {
  
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[370px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center md:max-w-[550px] lg:max-w-[700px]'>
        <h3 className=' absolute xs:top-14 md:top-8  uppercase tracking-[20px] text-gray-500 text-md md:text-2xl'>
            Skills
            </h3>
            <h4 className='absolute top-[90px] md:top-16 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>Hover over a skill for a currency proficiency</h4>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-6 mt-10 md:mt-10 '>
              {Skill?.slice(0, Skill.length / 2).map((skill, i)=>(
                <SkillComp key={i} skill={skill}/>

              ))}
              {Skill?.slice(Skill.length / 2, Skill.length).map((skill, i)=>(
                <SkillComp key={i} skill={skill} directionLeft/>

              ))}
            </div>
      
    </motion.div>
  )
}

export default Skills

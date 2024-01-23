import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { Skill } from '../../typings'
import { urlFor } from '../../sanity'
type Props = {
    directionLeft? : boolean
    skill : Skill
}

function SkillComp({ directionLeft, skill } : Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
      initial={{
        x: directionLeft ?  -100 : 100,
        opacity : 0,
      }}
      transition={{duration : 1}}
      whileInView={{opacity : 1 , x : 0}}
      className='  filter group-hover:grayscale transition duration-300'
      >
        <Image src={urlFor(skill?.image).url()} alt='skill Icon' width={100} height={100} className='w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px] rounded-full border border-gray-500 object-contain ' />

      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px] rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-sm md:text-2xl font-bold text-black opacity-100'>{skill?.progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default SkillComp

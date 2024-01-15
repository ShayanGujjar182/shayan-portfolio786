import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import icon from '@/assets/Icons/next-js.svg'
type Props = {
    directionLeft? : boolean
}

function Skill({ directionLeft } : Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity : 0,
      }}
      transition={{duration : 1}}
      whileInView={{opacity : 1 , x : 0}}
      className='  filter group-hover:grayscale transition duration-300'
      >
        {/* h-20 md:w-28 md:h-28 xl:w-32 xl:h-32  */}
        <Image src={icon} alt='skill Icon' className='w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-full border border-gray-500 object-cover' />

      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-2xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill

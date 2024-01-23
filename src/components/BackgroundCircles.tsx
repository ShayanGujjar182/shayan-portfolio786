import React from 'react'
import {motion} from 'framer-motion'

function BackgroundCircles() {
  return (
    <motion.div
    initial={{
        opacity : 0
    }}
    animate={{
        scale:[1, 2, 2, 3, 1],
        opacity:[0.1, 0.2, 0.4, 0.8, 1.0],
        border : ["20%", "20%", "50%", "80%", "20%"]
        
    }}
    transition={{
        duration : 2.5
    }}
    className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] rounded-full w-[100px] h-[100px] md:h-[200px] md:w-[200px]  mt-52 animate-ping'/>
      <div className='absolute border border-[#333333] rounded-full w-[150px] h-[150px] md:h-[300px] md:w-[300px] mt-52 '/>
      <div className='absolute border border-[#333333] rounded-full w-[250px] h-[250px] md:h-[500px]  md:w-[500px] mt-52 '/>
      <div className='absolute border opacity-20 border-main_color rounded-full w-[350px] h-[350px] md:h-[650px] md:w-[650px] mt-52 animate-pulse'/>
      <div className='absolute border border-[#333333] rounded-full w-[450px] h-[450px] md:h-[800px] md:w-[800px] mt-52 '/>
    </motion.div>
  )
}

export default BackgroundCircles

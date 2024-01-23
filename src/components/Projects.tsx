'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { Project } from '../../typings'
import { urlFor } from '../../sanity'
type Props = {
  Project : Project[]
}

function Projects({Project} : Props) {
  
  return (
    <motion.div
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute xs:top-14 md:top-24 lg:top-8 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>Projects</h3>
      <div className="relative w-screen  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-main_color/80">
        {
          Project?.map((project, i)=>(
            <div key={i} className=" w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen">
              <motion.div
              initial={{
                y:-150,
                opacity : 0
              }}
              transition={{duration : 1.2}}
              whileInView={{opacity : 1, y:0}}
              viewport={{once:true}}
              className='flex items-end w-[200px] h-[150px]'
              >
              <Image
              src={urlFor(project?.image).url()}
              alt=""
              width={250}
              height={70}
              className='object-cover  w-60 max-w-none h-32'
              />

              </motion.div>
              <div className="md:space-y-10 xs:space-y-3 sm:space-y-6 px-0 md:px-10 max-w-6xl ">
                <h4 className='text-lg md:text-3xl font-semibold text-center '>
                  <span className='underline decoration-main_color/50'>
                    Case Study {i + 1} of {Project?.length}:
                  </span><br/>
                 {project?.title}
                </h4>
                <p className='text-sm md:text-lg text-center md:text-left'>
                 {project?.summary}
                </p>
              </div>
            </div>
          ))}
          </div>
          <div className='w-full absolute top-[30%] bg-main_color/10 left-0 h-[250px] md:h-[500px] -skew-y-12 skew'></div>     
    </motion.div>
  )
}

export default Projects

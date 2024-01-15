'use client'
import React from 'react'
import Image from 'next/image'
import webimg from '@/assets/Images/Netflix-Games-iOS-launch.webp'
import {motion} from 'framer-motion'

function Projects() {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 lg:top-8 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-main_color/80">
        {
          projects.map((project, i)=>(
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen">
              <motion.div
              initial={{
                y:-300,
                opacity : 0
              }}
              transition={{duration : 1.2}}
              whileInView={{opacity : 1, y:0}}
              viewport={{once:true}}
              className='flex items-end w-[350px] h-[300px]'
              >
              <Image
              src={webimg}
              alt=""
              />

              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
                <h4 className='text-3xl font-semibold text-center '>
                  <span className='underline decoration-main_color/50'>
                    Case Study {i + 1} of {projects.length}:
                  </span><br/>
                  UPS clone
                </h4>
                <p className='text-lg text-center md:text-left'>
                  Netflix 2.0 app that has a log in and Log out Authentication with Google. It has a beautiful Home Screen with all the movies looking just like Netflix. There is also a subscription page where you can see your active monthly subscription . We also use Stripe Payments for the monthly Netflix Subscriptions!
                </p>
              </div>
            </div>
          ))}
          </div>
          <div className='w-full absolute top-[30%] bg-main_color/10 left-0 h-[500px] -skew-y-12'></div>     
    </motion.div>
  )
}

export default Projects

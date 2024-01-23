'use client'
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'


type Props ={
  Experiences : Experience
}

function ExperienceCard({Experiences} :Props) {
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
      ><Image src={urlFor(Experiences.companyImage).url()}
      alt='' className='rounded-full  object-cover object-center h-[100px] w-[100px] sm:w-[150px] sm:h-[150px] lg:w-[170px] lg:h-[170px]' height={300} width={300}/></motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-xl lg:text-2xl font-light'>{Experiences.company}</h4>
        <p className='text-bold text-sm lg:text-xl mt-1'>
            {Experiences.jobTitle}
        </p>
        <div className='flex space-2 my-2'>
            {Experiences.technologies.map((technology)=>(
              <Image key={technology._id} className=' rounded-full' src={urlFor(technology.image).url()} width={24} height={24} alt='techImage'/>
            ))}
        </div>
        <p className='uppercase py-5 lg:py-2 text-sm  text-gray-300'>{new Date(Experiences.dateStarted).toDateString()}-{" "}{Experiences?.isCurrentlyWorkingHere ? "Present" : new Date(Experiences.dateEnded).toDateString()}</p>
        <ul className='list-disc space-y-2 lg:space-y-3  text-sm lg:text-xl h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-main_color/80'>
          {Experiences.points?.map((point, i)=>(
            <li key={i}>{point}</li>
          )) }
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard

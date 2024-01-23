'use client'
import React from 'react'
import Image from 'next/image'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'
type Props={
  pageInfo : PageInfo
}

function Hero({pageInfo} : Props) {
  
    const [text, count] = useTypewriter({
        words : [
            `Hi, i'm ${pageInfo?.name}`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesTo-CODE-more/>"
        ],
        loop : true,
        delaySpeed : 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image src={urlFor(pageInfo?.heroImage).url()} alt='Profile Picture' width={150} height={150} className='relative rounded-full mx-auto object-contain '/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='xs:text-2xl h-20 md:text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
      </h1>
      <div className='pt-5 '>
            <Link href={'#about'}>
            <button className='heroButton'>About</button>
            </Link>
            <Link href={'#experience'}>
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href={'skills'}>
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href={'projects'}>
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>

      
    </div>
  )
}

export default Hero

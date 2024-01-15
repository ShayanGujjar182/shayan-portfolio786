'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'


function Header() {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale : 0.5
        }}
        animate={{
          x: 0,
          opacity:1,
          scale:1
        }}
        transition={{
          duration : 0.7,
        }}
         className='flex flex-row items-center'>
        <SocialIcon 
        url="https://youtube.com" 
        fgColor='gray'
        bgColor='transparent'
        
        />    
        <SocialIcon 
        url="https://youtube.com" 
        fgColor='gray'
        bgColor='transparent'
        />    
        <SocialIcon 
        url="https://youtube.com" 
        fgColor='gray'
        bgColor='transparent'
        />    
        </motion.div>
        
        <motion.span
        initial={{
          x : 500,
          opacity : 0,
          scale : 0.5
        }}
        animate ={{
          x : 0,
          opacity : 1,
          scale : 1,
        }}
        transition={{duration : 1.5}}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
   
        <SocialIcon 
        className='cursor-pointer' 
        network="email"
        fgColor='gray'
        bgColor='transparent'
        url="#contact"
        />  
        <p className='uppercase hidden md:inline-flex text-gray-400 text-sm'><Link href={'#contact'}>Get in Touch</Link></p>
        </motion.span>
        
    </header>
  )
}

export default Header

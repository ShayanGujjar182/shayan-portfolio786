import Image from 'next/image'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import myimg from '@/assets/Images/Hero Section.png'

export default function Home() {
  return (
    
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-main_color/80 scrollbar-rounded-[24px]'>

      <Header/>
      <section id='hero' className='snap-start'> 
      <Hero/> 
      </section>
      <section id='about' className='snap-center'>
        <About/>
      </section>
      <section id="experience" className='snap-center'>
      <WorkExperience/>
      </section>
      <section id="skills" className='snap-start'>
        <Skills/>
      </section>
      <section id="projects" className='snap-start'>
        <Projects/>
      </section>
      <section id="contact" className='snap-start'>
        <ContactMe/>
      </section>
      
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
        <Link href="#hero">
          <Image src={myimg}  alt={''} width={10} height={10} className='rounded-full filter hover:grayscale-0 cursor-pointer'/>
          </Link>
        </div>
      </footer>
      
    </div>
  )
}

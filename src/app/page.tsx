import { Suspense } from 'react'
import Image from 'next/image'
import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import WorkExperience from '@/src/components/WorkExperience'
import Skills from '@/src/components/Skills'
import Projects from '@/src/components/Projects'
import ContactMe from '@/src/components/ContactMe'
import Link from 'next/link'
import { PageInfo, Experience,Skill, Project, Social } from '../../typings'
import {fetchExperience, fetchProjects, fetchPageInfo, fetchSocials, fetchSkills} from '@/src/utils/sanityUtils'
import {urlFor} from "../../sanity"
import Loading from '@/src/components/Loading'



const FetchData = async() => {
  console.log('i fetched')
  const Socials : Social[] = await fetchSocials()
  const pageInfo : PageInfo = await fetchPageInfo()
  const Exeprience : Experience[] = await fetchExperience()
  const skills : Skill[] = await fetchSkills()
  const projects : Project[] = await fetchProjects()
  return {Socials, pageInfo, Exeprience, skills, projects}
}

export default async function Home() {
  
  const {Socials, pageInfo, Exeprience, skills, projects} = await FetchData()

  return (
    
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-main_color/80 scrollbar-rounded-[24px]'>
      <Suspense fallback={<Loading/>}>
      <Header Socials={Socials} />
      </Suspense>
      <Suspense fallback={<Loading/>}>
      <section id='hero' className='snap-start'> 
      <Hero pageInfo={pageInfo}/> 
      </section>
      </Suspense>
        <Suspense fallback={<Loading/>}>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
        </Suspense>
      <Suspense fallback={<Loading/>}>
      <section id="experience" className='snap-center'>
      <WorkExperience experience={Exeprience}/>
      </section>
      </Suspense>
        <Suspense fallback={<Loading/>}>
      <section id="skills" className='snap-start'>
        <Skills Skill={skills}/>
      </section>
        </Suspense>
        <Suspense fallback={<Loading/>}>
      <section id="projects" className='snap-start'>
        <Projects Project={projects}/>
      </section>
        </Suspense>
      <section id="contact" className='snap-start'>
        <ContactMe/>
      </section>
      
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <Suspense fallback={<Loading/>}>
        <Link href="#hero">
          <Image src={urlFor(pageInfo?.heroImage).url()}  alt={''} width={10} height={10} className='rounded-full filter hover:grayscale-0 cursor-pointer'/>
          </Link>
          </Suspense>
        </div>
      </footer>
      
    </div>
  )
}



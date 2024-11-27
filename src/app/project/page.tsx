import React from 'react'
import SectionHeading from '../components/Helper/SectionHeading'
import { projectData } from '@/app/Data/data'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <main className='pt-16 pb-16 bg-[#050709]'>
       <div className='mt-7'><SectionHeading>My Projects</SectionHeading></div>
       <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectData.map((project, i)=>{
            return <div 
            data-aos="fade-up"
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay={`${i * 150}`}
            key={project.id} className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all 
            duration-300'>
                <Link href={project.url} >
                <Image src={project.image} alt='project-Image' width={300} height={200} className='w-full'/>
                <h1 className='text-yellow-500 mt-3 text-[20px] font-semi-bold flex items-center justify-center'>{project.name}</h1>
                <p className='text-white opacity-80 text-[13px] flex items-center justify-center'>{project.text}</p>
                </Link>
            </div>

        })}
       </div>
    </main>

  )
}

export default Project
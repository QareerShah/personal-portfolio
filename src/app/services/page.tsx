import React from 'react'
import SectionHeading from '../components/Helper/SectionHeading'
import { servicesData } from '@/app/Data/data'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <div className='mt-7'><SectionHeading>Services</SectionHeading></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'>
            {servicesData.map((service , i) => {  
                return (
                    <div key={service.id}
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay={`${i * 150}`}
                    >
                        <ServicesCard service={service} />  
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services

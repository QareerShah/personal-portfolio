'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from '../../about/page'
import Services from '../../services/page'
import Project from '@/app/project/page';
import Skills from '../../skills/page'
import Contact from '../../contact/page'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      const { default: AOS } = await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };

    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;

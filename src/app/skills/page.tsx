import React from 'react';
import SkillsLanguage from './skillsLanguage';
import SectionHeading from '../components/Helper/SectionHeading';


const Skills = () => {
 
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className='mt-7'>
        <SectionHeading>Skills</SectionHeading>
      </div>
      <div
        className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center"
        data-aos="fade-up"
      >
        <div data-aos="zoom-in">
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="typescript"
            level1="w-[90%]"
            level2="w-[75%]"
            level3="w-[90%]"
          />
        </div>
        <div data-aos="zoom-in">
          <SkillsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="tailwind-css"
            level1="w-[80%]"
            level2="w-[70%]"
            level3="w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

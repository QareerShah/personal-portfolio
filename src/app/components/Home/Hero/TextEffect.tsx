import { BaseInfo } from '@/app/Data/data';
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-end Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        1000,
        'Web Designer',
        1000,
        'UI/UX Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='text-bg text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
           font-bold md:leading-[2rem] lg:leading-[3rem] xl:leading-[4rem] text-white whitespace-nowrap'
      repeat={Infinity}
    />
  );
};

export default TextEffect ;


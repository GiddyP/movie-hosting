import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div
            className='text-white w-[100vw] lg:w-[1440px] z-[-10] hero__img'
        >
           <span className="absolute top-[100px] ds:top-[107px] left-[17%] sm:left-[22%] ss:left-[25%] ds:left-[77px] text-[28px] md:text-[72px] font-bold leading-[36px] md:leading-[94px] md:tracking-[-0.05em] md:top-[109px] md:left-[30%] text-center ds:text-start tracking-[-0.05em]"
           > Watch <br className="hidden md:flex" /> something <br /> incredible.</span>

      </div>
    );
};

export default Hero;

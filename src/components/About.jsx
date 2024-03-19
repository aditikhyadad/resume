import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi! My name is Aditi Khyadad, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>As a fourth-year engineering student majoring in Computer Science, 
                I bring both technical expertise and creative flair to every project. 
                Beyond coding, I'm passionate about art. 
                From drawing to crafting designs, my creativity knows no limits. 
                Photography is my way of expressing and capturing life's moments, 
                while poster making helps me visually communicate ideas. Whether coding or painting, 
                I love merging logic with imagination. My portfolio showcases not just academic achievements 
                but also my diverse talents. I'm driven by innovation and excellence. 
                Ready for the next step, I aim to use my skills to make
                 meaningful contributions to the tech and design fields.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import Contact from './Contact';

const Home = () => (
  <>
    <section className='bg-[#f5deb3] justify-start'>
      <div className='home-card'>
        <div className='flex flex-col w-full h-full'>
          <span className='h-1/4 bg-[#f5deb3]'></span>
          <div className='portrait-text-container h-full'>
            <h1 className='text-6xl relative left-20'>Hello, I am Joel</h1>
            <h3 className='text-5xl relative left-20'>and I am a developer.</h3>
            <Contact />
          </div>
        </div>
        <img src={'images/joel2.png'} alt='Joel' />
      </div>
    </section>
  </>
);

export default Home;

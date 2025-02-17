import React from 'react';

const Home = () => (
  <section className='flex justify-center items-center'>
    <div className='card'>
      <div className='text-col w-2/3'>
        <h1 className='text-6xl'>Hello, my name is Joel</h1>
        <h3 className='text-5xl'>and I am a developer.</h3>
      </div>
      <img
        src={'images/joel.jpg'}
        alt='Joel'
        className='w-1/3 h-full object-cover rounded-lg'
      />
    </div>
  </section>
);

export default Home;

import React from 'react';
import { timelineEvents } from '../data/timelineData';

const Timeline = () => {
  return (
    <div className='bg-[url(/images/forest.jpg)] bg-cover bg-center bg-no-repeat'>
      <section className='bg-black bg-opacity-65 h-[95vh]'>
        <div className='z-10'>
          <h1 className='text-4xl text-center mt-12 text-white font-bold'>
            A short timeline
          </h1>
          <h3 className='text-2xl text-white'>
            with a few of the things I&apos;ve done
          </h3>
        </div>
        <div className='timeline-card'>
          <div className='relative flex items-center justify-center w-full bottom-10'>
            <div className='absolute top-1/2 w-[100vw] h-1 bg-[#f5f5f5]'></div>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative w-1/3 flex flex-col items-center ${
                  index % 2 === 0 ? 'mt-2' : 'mb-20'
                }`}
              >
                <div className='w-1 h-10 bg-[#f5f5f5] absolute top-1/2 transform'></div>
                <div
                  className={`w-60 text-center ${
                    index % 2 === 0
                      ? 'translate-y-1/2 py-10'
                      : '-translate-y-1/2'
                  }`}
                >
                  <h2 className='py-2 text-2xl font-semibold rounded-t-lg bg-emerald-900 w-full text-white'>
                    {event.year}
                  </h2>
                  <p className='bg-[#f5f5f5] text-gray-600 p-4 rounded-b-lg'>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;

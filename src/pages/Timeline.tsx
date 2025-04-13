import React from 'react';
import { timelineEvents } from '../data/timelineData';

const Timeline = () => {
  return (
    <div className='bg-[#344e41]/70'>
      <section className='bg-black/50 xl:h-[95vh] h-full'>
        <div className='mb-6 xl:mb-0'>
          <h1 className='text-4xl text-center mt-12 text-[#fefae0] font-bold'>
            A short timeline
          </h1>
          <h3 className='text-2xl text-[#fefae0]'>
            with a few of the things I&apos;ve done
          </h3>
        </div>

        <div className='timeline-card xl:w-[90%] 2xl:w-[80%] mt-16 xl:my-0'>
          {/* Flexbox för horisontell tidslinje på stora skärmar, vertikal på små */}
          <div className='relative flex flex-col xl:flex-row items-center justify-center w-full bottom-10'>
            {/* Tidslinje: Horisontell på stora skärmar, vertikal på små */}
            <div className='absolute xl:top-1/2 xl:w-[100vw] xl:h-1 w-1 h-[90%] bg-[#fefae0]'></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center w-full xl:w-1/3  ${
                  index % 2 === 0 ? 'xl:mt-2 xl:-mx-20' : 'xl:mb-20 xl:-mx-20'
                }`}
              >
                {/* Markörlinje: Anpassad för både horisontell och vertikal layout */}
                <div className='w-1 h-10 bg-[#fefae0] absolute xl:top-1/2 xl:transform -z-10 xl:z-0'></div>

                <div
                  className={`xl:w-56 md:w-[40%] w-full px-6 xl:px-0 text-center my-5 xl:my-0  ${
                    index % 2 === 0
                      ? 'xl:translate-y-1/2 xl:py-10'
                      : 'xl:-translate-y-1/2'
                  }`}
                >
                  <h2 className='py-2 text-2xl font-semibold rounded-t-lg bg-[#344e41] w-full text-[#fefae0]'>
                    {event.year}
                  </h2>
                  <p className='bg-[#fefae0] text-black p-4 rounded-b-lg'>
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

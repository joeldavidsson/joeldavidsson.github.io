/* eslint-disable react/no-unescaped-entities */
import Socials from '../components/Socials';

const Home = () => {
  return (
    <div className='bg-[#344e41]/90'>
      <section className='flex-row bg-black/50 md:justify-start h-[100vh]'>
        <div className='home-card lg:flex-row'>
          <div className='portrait-text-container lg:w-[50%] lg:items-end lg:pr-[4rem]'>
            <span className='lg:text-start'>
              <h2 className='lg:-ml-1 mb-[3rem] text-8xl uppercase tracking-[0.15em] font-semibold lg:text-start'>
                Hello
              </h2>
              <h3 className='text-3xl tracking-wider lg:text-start'>
                I'm Joel Davidsson
              </h3>
              <h4 className='text-2xl mt-3 tracking-wider'>
                Full Stack Developer
              </h4>
              <h4 className='text-xl mt-3 tracking-widest'>Halmstad, Sweden</h4>
              <Socials />
            </span>
          </div>

          <div className='img-card w-1/2 lg:h-1/2 aspect-square flex lg:justify-start justify-center items-center lg:pl-[2rem]'>
            <span className='rounded-full border-8 border-[#fefae0] lg:h-96 h-auto aspect-square bg-black flex justify-center items-center'>
              <img src={'images/joel3.png'} alt='Joel' />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

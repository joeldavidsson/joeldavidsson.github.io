/* eslint-disable react/no-unescaped-entities */
import Contact from './Contact';

const Home = () => {
  return (
    <div className='bg-[url(/images/wave.jpg)] bg-cover bg-no-repeat bg-top'>
      <div className='flex flex-row bg-[linear-gradient(to_right,rgba(6,78,59,0.4)_00%,rgba(0,0,0,1)_85%)] h-[100vh]'>
        <div className='home-card '>
          <div className='h-1/2 w-2/3'>
            <div className='portrait-text-container'>
              <h1 className='-ml-2 text-8xl uppercase font-bold tracking-[0.15em]'>
                Hello
              </h1>
              <h2 className='text-3xl tracking-wider mt-3'>
                I'm Joel Davidsson
              </h2>
              <h3 className='text-2xl mt-3 tracking-wider'>
                Full Stack Developer
              </h3>
              <h4 className='text-xl mt-3 tracking-widest'>Halmstad, Sweden</h4>
              <Contact />
            </div>
          </div>
        </div>
        <div className='img-card h-full w-1/3 flex justify-center items-center'>
          <img src={'images/joel3.png'} alt='Joel' />
        </div>
      </div>
    </div>
  );
};

export default Home;

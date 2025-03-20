/* eslint-disable react/no-unescaped-entities */
import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineSchool } from 'react-icons/md';
import { MdPersonOutline } from 'react-icons/md';
import CvButton from '../components/CvButton';

const About = () => {
  return (
    <div className='bg-[#344e41]/90'>
      <section className='bg-black/50 lg:h-[95vh]'>
        <h1 className='text-4xl uppercase font-bold pt-6'>About me</h1>
        <div className='about-card-container lg:flex-row lg:h-[70%] xl:px-12'>
          <div className='about-card '>
            <div className='xl:text-start'>
              <h2 className='text-2xl font-semibold'>
                <MdOutlineWorkOutline />
              </h2>
              <ul className='flex-col h-full xl:h-[70%]'>
                <li>
                  Developer with expertise in frontend technologies and a strong
                  foundation in backend and cloud solutions. Curious, driven,
                  and always eager to learn.
                </li>
                <li>
                  Solution-oriented and results-driven with a strong commitment
                  to delivering high-quality code. A team player who thrives in
                  collaborative environments, eager to contribute, share
                  knowledge, and learn from others.
                </li>
              </ul>
            </div>
          </div>
          <div className='about-card xl:text-center'>
            <div>
              <h2 className='text-2xl font-semibold'>
                <MdOutlineSchool />
              </h2>
              <ul className='md:flex-row lg:flex-col flex-col h-full xl:h-[70%]'>
                <li>
                  <b>Higher Vocational Education Diploma </b>
                  <br></br>
                  Frontend Developer<br></br>
                  EC Utbildning<br></br>
                  2023-2025
                </li>
                <li>
                  <b>Bachelor's Degree</b>
                  <br></br>Social Psychology<br></br>
                  University of Halmstad<br></br>
                  2012-2015
                </li>
              </ul>
            </div>
          </div>
          <div className='about-card xl:text-end'>
            <div>
              <h2 className='text-2xl font-semibold'>
                <MdPersonOutline />
              </h2>
              <ul className='flex-col h-full xl:h-[70%]'>
                <li>
                  Currently living in Halmstad, Sweden, with my girlfriend. I
                  enjoy movies, music, and spending time with family and
                  friends. I love dogs, traveling and exploring new places.
                </li>
                <li>
                  Passionate about sports, especially football and padel.
                  Unfortunately, I support Manchester United, which does wonders
                  for my patience but not so much for my sanity.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CvButton />
      </section>
    </div>
  );
};

export default About;

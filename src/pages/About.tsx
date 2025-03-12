/* eslint-disable react/no-unescaped-entities */
import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineSchool } from 'react-icons/md';
import { MdPersonOutline } from 'react-icons/md';

const About = () => {
  return (
    <div className='bg-[url(/images/leaf.jpg)] bg-cover bg-center bg-no-repeat'>
      <section className='bg-black/75 h-[95vh]'>
        <h1 className='text-4xl text-white uppercase font-bold pt-6'>
          About me
        </h1>
        <div className='about-card-container'>
          <div className='about-card'>
            <div className='text-center rounded-t-lg'>
              <h2 className='text-2xl font-semibold rounded-t-lg'>
                <MdOutlineWorkOutline />
              </h2>
              <ul>
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
          <div className='about-card'>
            <div className='rounded-t-lg'>
              <h2 className='text-2xl font-semibold rounded-t-lg'>
                <MdOutlineSchool />
              </h2>
              <ul>
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
          <div className='about-card'>
            <div className='rounded-t-lg'>
              <h2 className='text-2xl font-semibold rounded-t-lg'>
                <MdPersonOutline />
              </h2>
              <ul>
                <li>Spending time with family and friends</li>
                <li>Traveling and exploring new places</li>
                <li>Sports enthusiast: primarly football and padel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdHome, MdMail, MdPerson, MdPhone } from 'react-icons/md';

const Contact = () => {
  return (
    <div className='bg-[#344e41]/90'>
      <section className='bg-black/50 h-[95vh]'>
        <h1 className='text-4xl uppercase font-bold pt-6'>Contact me</h1>
        <h3 className='text-center text-[#fefae0] px-4'>
          If you want to get in touch, feel free to reach out to my contact info
          below
        </h3>
        <div className='contacts-container lg:h-[70%] 2xl:w-[60%] h-full'>
          <div className='flex flex-col justify-center 2xl:gap-10 w-full h-1/2 font-semibold'>
            <ul className='lg:flex-row flex-col'>
              <li>
                <MdPerson /> Joel Davidsson
              </li>
              <li>
                <MdHome /> Halmstad, Sweden
              </li>
              <li>
                <MdPhone /> +46735449702
              </li>
            </ul>
            <ul className='lg:flex-row flex-col'>
              <li>
                <a
                  href='mailto:joeldavidsson7@hotmail.com'
                  title='Send me an email'
                >
                  <MdMail />
                  joeldavidsson7@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/joeldavidsson/'
                  title='Connect with me on LinkedIn'
                >
                  <FaLinkedin />
                  linkedin.com/in/joeldavidsson
                </a>
              </li>
              <li>
                <a
                  href='https://www.github.com/joeldavidsson'
                  title='Visit my GitHub'
                >
                  <FaGithub />
                  github.com/joeldavidsson
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

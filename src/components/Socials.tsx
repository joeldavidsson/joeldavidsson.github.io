import { MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='contact-info-container'>
      <ul className='lg:gap-20 gap-8 flex lg:justify-start justify-center'>
        <li>
          <a
            href='mailto:joeldavidsson7@hotmail.com'
            title='Send me an email'
            className='mail'
          >
            <MdMail />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/joeldavidsson/'
            title='Connect with me on LinkedIn'
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href='https://www.github.com/joeldavidsson'
            title='Visit my GitHub'
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

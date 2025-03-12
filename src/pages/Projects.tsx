import { MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className='h-[95vh]'>
      <h1 className='text-4xl text-white uppercase font-bold text-center mb-4 mt-8'>
        Projects
      </h1>
      <div className='projects-container'>
        <div className='projects-card h-1/2'>
          <ul>
            <span>
              <li>
                <a
                  href='mailto:joeldavidsson7@hotmail.com'
                  title='Send me an email'
                >
                  <MdMail />
                </a>
              </li>
            </span>
            <span>
              <li>
                <a
                  href='https://www.linkedin.com/in/joeldavidsson/'
                  title='Connect with me on LinkedIn'
                >
                  <FaLinkedin />
                </a>
              </li>
            </span>
            <span>
              <li>
                <a
                  href='https://www.github.com/joeldavidsson'
                  title='Visit my GitHub'
                >
                  <FaGithub />
                </a>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;

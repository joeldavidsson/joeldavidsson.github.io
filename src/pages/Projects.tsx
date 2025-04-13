import { MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className='bg-[#344e41]/70'>
      <section className='bg-black/50 h-[95vh]'>
        <h1 className='text-4xl uppercase font-bold text-center mb-4 mt-8'>
          Projects
        </h1>
        <div className='projects-container'>
          <div className='projects-card'>
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
    </div>
  );
};

export default Projects;

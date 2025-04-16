import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`NavigationBar md:flex-row md:justify-center fixed top-0 transition-all duration-500 ease-in-out ${scroll ? 'bg-[#344e41]' : 'md:bg-transparent bg-[#344e41]'}`}
    >
      <div className='md:hidden w-full flex justify-end items-center pt-1 px-3'>
        <button onClick={toggleMenu} className='text-[#fefae0] h-12 text-4xl'>
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      <ul className={`md:flex ${menuOpen ? 'flex flex-col' : 'hidden'}`}>
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            offset={-200}
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link
            to='about'
            smooth={true}
            duration={500}
            offset={-40}
            onClick={handleLinkClick}
          >
            About me
          </Link>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            offset={-40}
            onClick={handleLinkClick}
          >
            Abilities
          </Link>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link
            to='timeline'
            smooth={true}
            duration={500}
            offset={-40}
            onClick={handleLinkClick}
          >
            Timeline
          </Link>
        </li>
        <li className='hover:scale-110 transition-transform duration-300'>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            offset={-40}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

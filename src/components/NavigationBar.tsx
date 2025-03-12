import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 1) {
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

  return (
    <nav
      className={`NavigationBar fixed top-0 transition-all duration-500 ease-in-out ${scroll ? 'bg-emerald-900' : 'bg-transparent'}`}
    >
      <ul>
        <li>
          <Link to='home' smooth={true} duration={500} offset={-200}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} offset={-40}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} offset={-40}>
            Abilities
          </Link>
        </li>
        <li>
          <Link to='timeline' smooth={true} duration={500} offset={-40}>
            Timeline
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} offset={-40}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

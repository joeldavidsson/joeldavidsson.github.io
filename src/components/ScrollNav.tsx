import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const sections = ['home', 'about', 'skills', 'timeline', 'contact'];

const ScrollNav = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='fixed top-1/2 right-2 transform -translate-y-1/2 z-10 invisible xl:visible'>
      <ul className='flex flex-col justify-center gap-4 h-full py-6 w-6'>
        {sections.map((section) => (
          <li key={section}>
            <ScrollLink
              to={section}
              smooth={true}
              duration={700}
              offset={section === 'home' ? -200 : -40}
              className={`cursor-pointer px-1 py-1 rounded-full text-white transition ${
                activeSection === section
                  ? 'bg-[#fefae0]'
                  : 'bg-gray-700 hover:bg-gray-500'
              }`}
            ></ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollNav;

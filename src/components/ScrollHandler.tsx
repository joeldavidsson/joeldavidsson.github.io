import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollHandler = () => {
  const [isScrollingDisabled, setIsScrollingDisabled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Hämta navigationbarens höjd
    const nav = document.querySelector('.NavigationBar');
    if (nav) {
      setNavHeight(nav.clientHeight);
    }

    const handleScroll = (event: WheelEvent) => {
      if (isScrollingDisabled) return;

      event.preventDefault(); // Förhindra standard scroll
      setIsScrollingDisabled(true);

      const visibleHeight = window.innerHeight - navHeight; // Räkna bort navbar-höjden

      if (event.deltaY > 0) {
        // Scrollar nedåt
        scroll.scrollMore(visibleHeight, { duration: 700 });
      } else {
        // Scrollar uppåt
        scroll.scrollMore(-visibleHeight, { duration: 700 });
      }

      setTimeout(() => {
        setIsScrollingDisabled(false);
      }, 700);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isScrollingDisabled, navHeight]);

  return null;
};

export default ScrollHandler;

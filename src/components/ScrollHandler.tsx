import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollHandler = () => {
  const [isScrollingDisabled, setIsScrollingDisabled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    const nav = document.querySelector('.NavigationBar');
    if (nav) {
      setNavHeight(nav.clientHeight);
    }

    const handleScroll = (event: WheelEvent) => {
      if (isScrollingDisabled) return;

      event.preventDefault();
      setIsScrollingDisabled(true);

      const visibleHeight = window.innerHeight - navHeight;

      if (event.deltaY > 0) {
        scroll.scrollMore(visibleHeight, { duration: 700 });
      } else {
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
  }, [isScrollingDisabled, navHeight, isLargeScreen]);

  return null;
};

export default ScrollHandler;

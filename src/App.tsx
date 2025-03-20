import { Element } from 'react-scroll';
import About from './pages/About';
import Skills from './pages/Skills';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Timeline from './pages/Timeline';
import ScrollHandler from './components/ScrollHandler';
import ScrollNav from './components/ScrollNav';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className='App bg-[url(/images/wave.jpg)] bg-fixed bg-cover bg-center bg-no-repeat'>
      <ScrollHandler />
      <ScrollNav />
      <NavigationBar />

      <Element name='home' id='home'>
        <Home />
      </Element>

      <Element name='about' id='about'>
        <About />
      </Element>

      <Element name='skills' id='skills'>
        <Skills />
      </Element>

      {/* <Element name='projects' id='projects'>
        <Projects />
      </Element> */}

      <Element name='timeline' id='timeline'>
        <Timeline />
      </Element>

      <Element name='contact' id='contact'>
        <Contact />
      </Element>
    </div>
  );
};

export default App;

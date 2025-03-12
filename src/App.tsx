import { Element } from 'react-scroll';
import About from './pages/About';
import Skills from './pages/Skills';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import ScrollHandler from './components/ScrollHandler';
import ScrollNav from './components/ScrollNav';

const App = () => {
  return (
    <div className='App'>
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

      <Element name='projects' id='projects'>
        <Projects />
      </Element>

      <Element name='timeline' id='timeline'>
        <Timeline />
      </Element>
    </div>
  );
};

export default App;

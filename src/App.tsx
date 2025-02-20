import React from 'react';
import About from './pages/About';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <div className='App'>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Routes>
        <Route path='/' />
        <Route path='/about' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

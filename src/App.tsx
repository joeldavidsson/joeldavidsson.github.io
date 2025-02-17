import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <NavigationBar />
      <Home />
      <Routes>
        <Route path='/' />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

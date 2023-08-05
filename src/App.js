import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Project from './Components/Project/Project'
import './App.css';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
      <Navbar/>
      <Hero/>
      <Project/>
      <Skills/>
      <About/>
      <Contact/>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

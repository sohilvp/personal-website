import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        {<Hero />}
        <Project />
        <Skills />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

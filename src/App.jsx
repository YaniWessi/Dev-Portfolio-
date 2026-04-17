import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;

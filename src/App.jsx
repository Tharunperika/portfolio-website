import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'; // ✅ Import Footer

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Re-trigger animation on scroll
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> {/* ✅ Footer placed at the bottom */}
    </>
  );
}

export default App;







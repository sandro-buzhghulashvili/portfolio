import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import DevTree from '../components/DevTree';

function MainPage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <DevTree />
      <Projects />
    </>
  );
}

export default MainPage;

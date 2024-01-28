import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
// import Projects from '../components/Projects';
import DevTree from '../components/DevTree';
import TechStack from '../components/TechStack';

import { skills } from '../assets/SKILLS';
import { PROJECTS } from '../assets/PROJECTS';
import Projects2 from '../components/Projects2';

function MainPage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <DevTree />
      <TechStack techStack={skills} />
      <Projects2 projects={PROJECTS} />
      {/* <Projects /> */}
    </>
  );
}

export default MainPage;

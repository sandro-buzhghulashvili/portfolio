import React from 'react';

import { motion } from 'framer-motion';
import classes from './Projects.module.scss';
import Project from './Project';
import { PROJECTS } from '../assets/PROJECTS';

const Projects = () => {
  const allProjects = PROJECTS.map((project) => {
    return (
      <Project
        key={project.id}
        img={project.img}
        title={project.title}
        description={project.description}
        link={project.link}
        source={project.source}
      />
    );
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={classes.projects}
      id="projects"
    >
      <span>PROJECTS</span>
      <h1>Each project is a unique piece of development</h1>
      {allProjects}
    </motion.div>
  );
};

export default Projects;

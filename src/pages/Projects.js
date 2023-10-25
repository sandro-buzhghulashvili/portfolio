import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import classes from './Projects.module.scss';
import Navbar from '../components/Navbar';
import { PROJECTS } from '../assets/PROJECTS';

const ProjectsPage = () => {
  const allProjects = PROJECTS.map((project) => {
    return (
      <div className={classes.project} key={project.id}>
        <img src={project.img} alt="project" />
        <div className={classes.info}>
          <h1>{project.title}</h1>
          <span className={classes.icon}>
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span className={classes.icon}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </span>
        </div>
      </div>
    );
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar hideSections={true} />
      <h1 className={classes.header}>All Projects</h1>
      <div className={classes.projects}>{allProjects}</div>
    </>
  );
};

export default ProjectsPage;

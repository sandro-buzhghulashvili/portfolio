import React from 'react';

import classes from './Projects.module.scss';
import Navbar from '../components/Navbar';

const ProjectsPage = () => {
  return (
    <>
      <Navbar hideSections={true} />
      <h1 style={{ marginTop: '400px' }}> projects</h1>
    </>
  );
};

export default ProjectsPage;

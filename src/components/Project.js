import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import classes from './Project.module.scss';

const Project = ({ img, title, description, link, source }) => {
  const [animate, setAnimate] = useState(false);

  const enableAnimation = () => {
    setAnimate(true);
  };

  const disableAnimation = () => {
    setAnimate(false);
  };

  return (
    <div className={`${classes.project}`}>
      <img
        onMouseEnter={enableAnimation}
        onMouseLeave={disableAnimation}
        className={animate ? classes['animate-img'] : undefined}
        src={img}
        alt="project"
      />
      <div className={classes.info}>
        <h1>{title}</h1>
        <p>{description}</p>
        {title === 'CAMP MATE' && (
          <p className={classes.warning}>
            This specific app is hosted on free service and it might take a
            while to load app
          </p>
        )}
        <div className={classes.links}>
          <a href={source} target="_blank" rel="noopener noreferrer">
            Code <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Live Demo <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

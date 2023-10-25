import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer} id="footerContactSection">
      <div className={classes.content}>
        <div className={classes.contact}>
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faMessage} />
          </span>
          <div>
            <h1>Mail</h1>
            <a href="mailto:sbuzhghulashvili@gmail.com">
              sbuzhghulashvili@gmail.com
            </a>
          </div>
        </div>
        <div className={classes.links}>
          <a href="https://github.com/sandro-buzhghulashvili" target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/sandro-buzhghulashvili-701209238/" target="_blank" rel="noopener noreferrer" className={classes.icon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

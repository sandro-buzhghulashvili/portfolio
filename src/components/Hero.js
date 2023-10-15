import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

import classes from './Hero.module.scss';
import heroImg from '../assets/hero-img.jpg';
import htmlImg from '../assets/skillset-photos/html.png';
import cssImg from '../assets/skillset-photos/css.png';
import jsImg from '../assets/skillset-photos/js.png';
import reactImg from '../assets/skillset-photos/react.png';
import sassImg from '../assets/skillset-photos/sass.png';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes.container}
    >
      <div className={classes.content}>
        <div className={classes.hero}>
          <div className={classes.info}>
            <h1>Front-End React Developer</h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Hi,I'm Sandro Buzhgulashvili. A passionate Front-end React
              Developer. I'm dedicated to creating web solutions that not only
              look great but also function flawlessly.
            </motion.p>
            <div>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <img src={heroImg} alt="hero" />
        </div>
        <div className={classes.skills}>
          <p>Tech Skillset</p>
          <ul>
            <li>
              <img src={htmlImg} alt="skill" />
            </li>
            <li>
              <img src={cssImg} alt="skill" />
            </li>
            <li>
              <img src={jsImg} alt="skill" />
            </li>
            <li>
              <img src={reactImg} alt="skill" />
            </li>
            <li>
              <img src={sassImg} alt="skill" />
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

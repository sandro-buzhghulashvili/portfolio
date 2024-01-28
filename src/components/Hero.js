import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, useScroll, useTransform } from 'framer-motion';

import classes from './Hero.module.scss';
import heroImg from '../assets/hero-img.jpg';
// import htmlImg from "../assets/skillset-photos/html.png";
// import cssImg from "../assets/skillset-photos/css.png";
// import jsImg from "../assets/skillset-photos/js.png";
// import reactImg from "../assets/skillset-photos/react.png";
// import sassImg from "../assets/skillset-photos/sass.png";
// import gitImg from "../assets/skillset-photos/git.png";
import waveImg from '../assets/wave1.png';
import { useSelector } from 'react-redux';

const Hero = () => {
  const nightMode = useSelector((state) => state);
  console.log(nightMode);
  const { scrollY } = useScroll();
  const infoOpacity = useTransform(scrollY, [0, 300, 600], [1, 0.6, 0.2]);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.hero}>
            <motion.div
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={classes.info}
            >
              <motion.div style={{ opacity: infoOpacity }}>
                <h1>
                  Hello ! 👋{' '}
                  <span className={classes['gradient']}>I'm Sandro</span>{' '}
                  <span className={classes['stroked']}>Frontend Developer</span>
                </h1>
                <p>
                  Hi,I'm Sandro Buzhgulashvili. A passionate Front-end{' '}
                  <span className={classes.gradient}>React </span>
                  Developer. I'm dedicated to creating web solutions that not
                  only look great but also function flawlessly.
                </p>
              </motion.div>
              <div>
                <a
                  href="https://www.linkedin.com/in/sandro-buzhghulashvili-701209238/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/sandro-buzhghulashvili"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, translateX: 600 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8 }}
              src={heroImg}
              alt="hero"
            />
          </div>
        </div>
      </div>
      <img src={waveImg} className={classes.wave} alt="wave" />
    </>
  );
};

export default Hero;

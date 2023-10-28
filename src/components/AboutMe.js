import React from 'react';
import { motion } from 'framer-motion';
import Chart from './UI/Chart';

import illustration from '../assets/illustration1.jpg';

import classes from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={classes.about}
        id="aboutMe"
      >
        <img src={illustration} alt="illustration" />
        <div className={classes.card}>
          <span>ABOUT ME</span>
          <h1>A dedicated Front-end Developer based in Georgia</h1>
          <p>
            I am Sandro Buzhgulashvili,a student and a passionate front-end web
            developer. My journey in the world of web development has equipped
            me with a strong command of essential technologies, including HTML,
            CSS, JavaScript, React, and Sass.Also i completed a coding bootcamp,
            where i got basic understanding of Angular, Node.js, Express, and
            MongoDB. I'm currently focused on enhancing my React skills and have
            aspirations to become a MERN stack developer in the future. Explore
            my portfolio to see my work and my journey in web development.
          </p>
        </div>
      </motion.div>
      <Chart />
    </>
  );
};

export default AboutMe;

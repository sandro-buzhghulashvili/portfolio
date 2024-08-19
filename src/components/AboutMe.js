import React from 'react';
import Chart from './UI/Chart';
import waveImg from '../assets/wave2.png';

import classes from './AboutMe.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';

const AboutMe = () => {
  const { scrollY } = useScroll();
  const aboutScale = useTransform(scrollY, [1500, 1700], [1, 0.8]);

  return (
    <>
      <motion.div
        style={{ scale: aboutScale }}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`${classes.about}`}
        id="aboutMe"
      >
        <div>
          <p className={classes.caption}>INTRODUCTION</p>
          <h1>Overview.</h1>
          <p className={classes.reference}>
            I am a software developer with a background in Python and
            JavaScript/TypeScript. Having successfully completed numerous
            projects, I have gained a solid foundation in full-stack
            development, working with technologies such as React.js, Next.js,
            the MERN stack, Flask, and SQL. I have good experience with version
            control systems such as Git, and I can write GitHub Actions and
            simple workflows. I also have experience with WebSockets, both on
            the front-end and back-end. As an 18-year-old student, I am striving
            to learn more about computer science, master core algorithms and
            data structures on LeetCode, and gather professional experience
            through real-world projects.
          </p>
        </div>
        <Chart />
      </motion.div>
      <img src={waveImg} alt="wave" className={classes.wave} />
    </>
  );
};

export default AboutMe;

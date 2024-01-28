import React from 'react';
import { motion } from 'framer-motion';

import classes from './DevTree.module.scss';
import waveImg from '../assets/wave3.png';

import coltCourseBadge from '../assets/dev-tree/2021.jpg';
import itStepBadge from '../assets/dev-tree/it-step.png';
import maxCourseBage from '../assets/dev-tree/max.png';
import btuBadge from '../assets/dev-tree/btu.svg';

const DevTree = () => {
  return (
    <>
      <div className={classes.dev}>
        <main>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className={classes.caption}>WHAT I HAVE DONE SO FAR</p>
            <h1 className={classes.title}>Development Tree.</h1>
          </motion.div>
          <div className={classes.tree}>
            <div className={classes.post}></div>
            <div className={classes.stage}>
              <motion.span
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={classes.badge}
              >
                <img src={coltCourseBadge} alt="badge" />
              </motion.span>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.content}
              >
                <span className={`${classes.pin} ${classes.right}`}></span>
                {/* <span className={`${classes.pin} ${classes.left}`}></span> */}
                <h2>Web Developer Bootcamp - Colt Steele</h2>
                <p>UDEMY</p>
                <ul>
                  <li>
                    Attained proficiency in HTML, CSS, Bootstrap, and JavaScript
                    (ES6), laying the groundwork for effective web development.
                  </li>
                  <li>
                    Explored Node.js, constructing a full-stack web application
                    with Express.js, Mongoose, and MongoDB.
                  </li>
                  <li>2021</li>
                </ul>
              </motion.div>
            </div>
            <div className={classes.stage}>
              <motion.span
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={classes.badge}
              >
                <img src={itStepBadge} alt="badge" />
              </motion.span>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.content}
              >
                {/* <span className={`${classes.pin} ${classes.right}`}></span> */}
                <span className={`${classes.pin} ${classes.left}`}></span>
                <h2>ITSTEP Academy - Front-End Web Programming Program</h2>
                <p>ITSTEP</p>
                <ul>
                  <li>
                    Enhanced proficiency in crafting pixel-perfect pages and
                    honed skills in Vanilla JavaScript while tackling
                    intermediate problems in algorithms and data structures.
                  </li>
                  <li>
                    Mastered TypeScript and AngularJS, undertaking multiple
                    projects to deepen understanding of OOP principles, CRUD
                    operations, and multi-page applications.
                  </li>
                  <li>2022</li>
                </ul>
              </motion.div>
            </div>
            <div className={classes.stage}>
              <motion.span
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={classes.badge}
              >
                <img src={maxCourseBage} alt="badge" />
              </motion.span>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.content}
              >
                <span className={`${classes.pin} ${classes.right}`}></span>
                {/* <span className={`${classes.pin} ${classes.left}`}></span> */}
                <h2>React - The Complete Guide</h2>
                <p>Maximilian Schwarzmüller</p>
                <ul>
                  <li>
                    Devoted effort to mastering React, gaining expertise in both
                    class-based and function-based approaches. Explored core
                    hooks, contexts, and delved into advanced concepts.
                  </li>
                  <li>
                    Explored React Router and React Redux, mastering the
                    integration of React with TypeScript. Additionally, delved
                    into Sass, Tailwind, and Framer Motion for enhanced styling
                    and animation capabilities.
                  </li>
                  <li>2023</li>
                </ul>
              </motion.div>
            </div>
            <div className={classes.stage}>
              <motion.span
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={classes.badge}
              >
                <img
                  src={btuBadge}
                  alt="badge"
                  style={{ background: '#fff' }}
                />
              </motion.span>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.content}
              >
                {/* <span className={`${classes.pin} ${classes.right}`}></span> */}
                <span className={`${classes.pin} ${classes.left}`}></span>
                <h2>BTU - Information Technologies</h2>
                <p>Business and Technology University</p>
                <ul>
                  <li>
                    Learned Python and established a solid foundation in
                    computer architecture, operating systems, and digital
                    technologies.
                  </li>
                  <li>
                    Continuously advancing and learning new technologies to
                    further enhance my skill set.
                  </li>
                  <li>2023 - Present</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
      <img src={waveImg} alt="wave" className={classes.wave} />
    </>
  );
};

export default DevTree;

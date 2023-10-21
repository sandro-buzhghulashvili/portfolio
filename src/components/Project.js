import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import classes from './Project.module.scss';

const Project = ({ img, title, description, link, source }) => {
  const [showBtn,setShowBtn] = useState(false)
  const [showDescription,setShowDescription] = useState(true)

  const resizeHandler = () => {
    if(window.innerWidth <= 650) {
      setShowBtn(true)
      setShowDescription(false)
    } else {
      setShowBtn(false)
      setShowDescription(true)
    }
  }

  const showDescriptionHandler = () => {
    setShowDescription(prevValue => !prevValue)
  }


  useEffect(() => {
    window.addEventListener("resize", resizeHandler)

    return () => {
      window.removeEventListener("resize",resizeHandler)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`${classes.project}`}
    >
      <img src={img} alt="project" />
      <div className={classes.info}>
        <h1>{title}</h1>
        <p>{showDescription ? description : description.slice(0, 88) + "..."}</p>
        {showBtn && <button onClick={showDescriptionHandler} className={classes['show-description']}>Show {showDescription ? "less" : "more"}</button>}
        {title === 'CAMP MATE' && (
          <p className={classes.warning}>
            This specific app might take a
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
    </motion.div>
  );
};

export default Project;

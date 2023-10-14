import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import classes from "./Hero.module.scss"
import heroImg from "../assets/hero-img.jpg"

const Hero = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
            <div className={classes.hero}>
                <div className={classes.info}>
                     <h1>Front-End React Developer</h1>
                     <p>Hi,I'm Sandro Buzhgulashvili. A passionate Front-end React Developer.  I'm dedicated to creating web solutions that not only look great but also function flawlessly.</p>
                     <div>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                     </div>
                </div>
                <img src={heroImg} alt="hero" />
            </div>
            </div>
        </div>
    )
}

export default Hero
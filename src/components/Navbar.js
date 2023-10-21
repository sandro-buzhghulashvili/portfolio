import React, { useState } from 'react';

import classes from './Navbar.module.scss';

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const toggleNavbarHandler = () => {
    setToggleNavbar((prevValue) => !prevValue);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (section) => {
    setToggleNavbar((prevValue) => !prevValue);

    const sectionContainer = document.getElementById(section);

    if (section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      sectionContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.navbar}>
      <h1 onClick={scrollToTop} className={classes.header}>
        Sandro buzhgulashvili
      </h1>
      <span
        onClick={toggleNavbarHandler}
        className={`${classes.menu} ${
          toggleNavbar ? classes.close : undefined
        }`}
      ></span>
      <ul className={toggleNavbar ? classes.toggle : undefined}>
        <li onClick={() => scrollToSection('home')}>
          <a href="#nav">Home</a>
        </li>
        <li onClick={() => scrollToSection('aboutMe')}>
          <a href="#nav">About</a>
        </li>
        <li onClick={() => scrollToSection('projects')}>
          <a href="#nav">Projects</a>
        </li>
        <li onClick={() => scrollToSection()}>
          <a href="#nav">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

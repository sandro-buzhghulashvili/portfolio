import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import classes from './Navbar.module.scss';

const Navbar = ({ hideSections }) => {
  const location = useLocation();
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
      scrollToTop();
    } else {
      sectionContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.pathname.startsWith('/projects')) scrollToTop();
  }, [location]);

  return (
    <div className={classes.navbar}>
      <div className={classes['nav']}>
        <Link to="/" onClick={scrollToTop} className={classes.header}>
          Sandro.bgi
        </Link>
        <span
          onClick={toggleNavbarHandler}
          className={`${classes.menu} ${
            toggleNavbar ? classes.close : undefined
          }`}
        ></span>
        <ul className={toggleNavbar ? classes.toggle : undefined}>
          <li onClick={() => scrollToSection('home')}>
            <Link to="/">Home</Link>
          </li>
          {!hideSections && (
            <>
              {location.pathname === '/' && (
                <>
                  <li onClick={() => scrollToSection('aboutMe')}>
                    <a href="#nav">About</a>
                  </li>
                  <li onClick={() => scrollToSection('projects')}>
                    <a href="#nav">Projects</a>
                  </li>
                </>
              )}
              <li onClick={() => scrollToSection('footerContactSection')}>
                <a href="#nav">Contact</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

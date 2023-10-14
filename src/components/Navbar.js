import React, {useState} from 'react';

import classes from './Navbar.module.scss';

const Navbar = () => {
  const [toggleNavbar,setToggleNavbar] = useState(false)

  const toggleNavbarHandler = () => {
    setToggleNavbar(prevValue => !prevValue)
  }

  return (
    <div className={classes.navbar}>
      <h1 className={classes.header}>Sandro.dev</h1>
      <span onClick={toggleNavbarHandler} className={`${classes.menu} ${toggleNavbar ? classes.close : undefined}`}></span>
      <ul className={toggleNavbar ? classes.toggle : undefined}>
        <li onClick={toggleNavbarHandler}>
          <a href="#">Home</a>
        </li>
        <li onClick={toggleNavbarHandler}>
          <a href="#">About</a>
        </li>
        <li onClick={toggleNavbarHandler}>
          <a href="#">Projects</a>
        </li>
        <li onClick={toggleNavbarHandler}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

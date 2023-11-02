import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/UI/CustomCursor';

const LayoutPage = () => {
  const [cursorPosition,setCursorPosition] = useState({x : "50%", y : "50%"})

  const cursorHandler = (event) => {
    setCursorPosition({
      x : event.clientX,
      y : event.clientY
    })
  }

  useEffect(() => {
    window.addEventListener("mousemove", cursorHandler)

    return () => {
      window.removeEventListener("mousemove", cursorHandler)
    }
  }, [])
  return (
    <>
      <CustomCursor posX={cursorPosition.x} posY={cursorPosition.y}/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;

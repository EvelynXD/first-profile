import React from 'react';
import {motion} from 'framer-motion';

import "./loader.css";

const Loader = () => {
  return <motion.section 
  initial={{y: 0, opacity: 1}}
  animate={{
    y: -1000,
    transition: {
        duration: 1,
        delay: 2
    }
  }}
  exit={{ y: window.innerWidth }}
  className="loaderHome">
    <div className="containerLoaderHomee">
        <motion.span 
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 0.5},
            transitionEnd : {
                display: "none",
            }
        }}
        className="loaderText">Hallo</motion.span>
        <motion.span
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 0.8},
            transitionEnd : {
                display: "none",
            }
        }}
        className="loaderText">Hello</motion.span>
        <motion.span 
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 1.1},
            transitionEnd : {
                display: "none",
            }
        }}
        className="loaderText">مرحبًا</motion.span>
        <motion.span 
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 1.4},
            transitionEnd : {
                display: "none",
            }
        }}
        className="loaderText">Привет</motion.span>
        <motion.span 
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 1.7}
        }}
        className="loaderText">こんにちは</motion.span>
    </div>
  </motion.section>
};

export default Loader;
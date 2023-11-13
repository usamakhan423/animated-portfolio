import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={variants}>Harry Petter</motion.h2>
          <motion.h1 variants={variants}>Join Network & Grow Up</motion.h1>
          <motion.div className="buttons" variants={variants}>
            <motion.button variants={variants}>
              See the latest work
            </motion.button>
            <motion.button variants={variants} className="fill">
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img variants={variants} src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <div className="slider-text">Writter Content Creator Influencer</div>
      <div className="image-container">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

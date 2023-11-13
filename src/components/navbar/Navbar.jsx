import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          //   Initial Value
          initial={{ opacity: 0, scale: 0.5 }}
          //   Animate while initial time up
          animate={{ opacity: 1, scale: 0.7 }}
          //   Transition to be applied
          transition={{ duration: 0.5 }}
          //   While hover
          //   whileHover={{ opacity: 1, scale: 1.5 }}
        >
          Lama Dev
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="dribbble" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

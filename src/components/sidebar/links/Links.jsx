import React from "react";
import { motion } from "framer-motion";

const variants = {
  closed: {
    staggerChildren: 0.1,
  },
  open: {
    staggerChildren: 0.05,
    staggerDirection: -1,
  },
};
const itmesVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const links = ["Homepage", "About", "Services", "Portfolio", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {links.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itmesVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

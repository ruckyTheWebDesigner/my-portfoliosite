// import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { motion } from "framer-motion";

gsap.registerPlugin(TextPlugin);

function Hero() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        // duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <motion.div
      className='hero '
      initial='hidden'
      animate='visible'
      variants={list}>
      <motion.h1 className='hero-heading mb-3 gs_reveal' variants={item}>
        Hi, my name is
      </motion.h1>
      <motion.h2 className='hero-title gs_reveal' variants={item}>
        Rukewe Joseph.
      </motion.h2>
      <motion.h5 className='hero-subtitle mb-3 ' variants={item}>
        I build things for the web
      </motion.h5>
      <motion.h6 className='hero-content' variants={item}>
        I’m a web developer specializing in building immersive and exceptional
        web applications. Currently, I’m focused on building accessible,
        human-centered products that are easy to use with{" "}
        <span className='green-text'>user-friendly experiences.</span>
      </motion.h6>
      <motion.button
        className='button'
        variants={item}
        onClick={() => scrollToSection("about-me")}>
        More About Me
      </motion.button>
    </motion.div>
  );
}

export default Hero;

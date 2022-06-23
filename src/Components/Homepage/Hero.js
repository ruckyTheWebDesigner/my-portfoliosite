import { gsap } from "gsap";
// import { useRef, useEffect } from "react";

function Hero() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { marginBottom: "300px" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { marginTop: "100px" });
  };
  return (
    <div className='hero gs_reveal'>
      <h1 className='hero-heading mb-3'>Hi, my name is</h1>
      <h2 className='hero-title'>Rukewe Joseph.</h2>
      <h5 className='hero-subtitle mb-3'>I build things for the web</h5>
      <h6 className='hero-content'>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products{" "}
        <span className='green-text'>that are easy to use.</span>
      </h6>
      <button className='button'>Hire Me!!</button>
    </div>
  );
}

export default Hero;

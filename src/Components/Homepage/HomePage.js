import React from "react";
// import ResponsiveAppBar from "./NavBar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import OtherProjects from "./OtherProjects";
import ContactMe from "./ContactMe";
import Sidebar from "./Sidebar";
import ResponsiveAppBar from "./NavBar";
// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function HomePage() {
  return (
    <div>
      <ResponsiveAppBar />

      <div className='homepage-body'>
        <Hero />
        <AboutMe className='gs_reveal' />
        <Projects />
        <OtherProjects />
        <ContactMe />
        <Sidebar />
      </div>
    </div>
  );
}

export default HomePage;
